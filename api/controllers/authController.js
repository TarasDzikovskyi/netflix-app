const {User, OAuth, OAuthAction} = require("../models");
const CryptoJS = require('crypto-js')
const {jwtService} = require("../services");
const userUtil = require("../utils/user.util");
const {userNormalizator} = require("../utils/user.util");
const {emailService} = require("../services");
const emailActionEnum = require("../config/emailActionEnum");
const uuid = require('uuid');
const ErrorHandler = require("../errors/ErrorHandler");


module.exports.createUser = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

            let createdUser = await User.create({...req.body, password: hashedPassword});

            const userToReturn = userUtil.userNormalizator(createdUser.toObject());
            res.status(201).json(userToReturn);
        } else res.status(401).json("Password is required!")
    } catch (e) {
        next(e);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong username or password!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Wrong username or password!");

        const tokenPair = jwtService.generateTokenPair();
        res.cookie('accessToken', tokenPair.access_token, {maxAge: 12*60*60*1000, httpOnly: true})
        res.cookie('refreshToken', tokenPair.refresh_token, {maxAge: 30*24*60*60*1000, httpOnly: true})

        console.log(tokenPair)

        await OAuth.create({...tokenPair, user: user._id})

        res.status(200).json({...tokenPair, user: userNormalizator(user)})
    } catch (e) {
        next(e);
    }
}

module.exports.forgotPassword = async (req, res, next) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email: email})

        const actionToken = jwtService.generateActionToken();

        await emailService.sendMail(
            email,
            emailActionEnum.FORGOT,
            {email: email, userName: user.username, actionToken: actionToken.action_token}
        );

        await OAuthAction.create({...actionToken, user: user._id});

        res.json({...actionToken, user: userNormalizator(user)});
    } catch (e) {
        next(e);
    }
},

module.exports.changePassword = async (req, res, next) => {
        try {
            const {action_token} = req.body;

            const {user: {_id}, body: {password}} = req;

            const hashedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
            await User.findByIdAndUpdate({_id}, {password: hashedPassword});

            await OAuthAction.deleteOne({action_token});
            await OAuth.deleteMany({_id});

            const user = await User.findById(_id)

            await emailService.sendMail(
                user.email,
                emailActionEnum.CHANGE,
                {email: user.email, userName: user.username}
            );

            res.status(200);
        } catch (e) {
            next(e);
        }
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        const {accessToken} = req.cookies

        await OAuth.deleteOne({accessToken});

        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.json('User is logout');
    } catch (e) {
        next(e);
    }
}

module.exports.test = async (req, res, next) => {
    try {
        const activationLink = uuid.v4(); 
        console.log(activationLink)

        const email = 'tarasdz12367@gmail.com'
        const username = 'otsocity'

        await emailService.sendMail(
            email,
            emailActionEnum.ACTIVATE,
            {email: email, userName: username, link: activationLink}
        );

        res.json('qwerty');
    } catch (e) {
        next(e);
    }
}

module.exports.activate = async (req, res, next) => {
    try {
        const activationLink = req.params.link
        console.log(activationLink)

        // const user = await User.findOne({activationLink})
        // if (!user) {
        //     throw new ErrorHandler(401, 'Incorrect activation link')
        // }
        // user.isActivated = true;
        // await user.save();

        // res.redirect(process.env.CLIENT_URL)
    } catch (e) {
        next(e);
    }
}