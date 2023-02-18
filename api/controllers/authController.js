const {User, OAuth, OAuthAction, ProfilePictures} = require("../models/models");
const CryptoJS = require('crypto-js');
const {jwtService} = require("../services");
const userUtil = require("../utils/user.util");
const {userNormalizator} = require("../utils/user.util");
const {emailService} = require("../services");
const emailActionEnum = require("../config/emailActionEnum");
const {Sequelize} = require("sequelize");
const jwt_decode = require('jwt-decode');


module.exports.createUser = async (req, res, next) => {
    try {
        if (req.body.password) {
            const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

            const random_pic = await ProfilePictures.findAll({order: Sequelize.literal('random()'), limit: 1 });
            req.body['profilePic'] = random_pic[0].dataValues.pictures;

            let createdUser = await User.create({...req.body, password: hashedPassword})

            const userToReturn = userUtil.userNormalizator(createdUser.dataValues);

            res.status(201).json(userToReturn);
        } else res.status(401).json("Password is required!")
    } catch (e) {
        next(e);
    }
}

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({where: {email: req.body.email}});

        if(!user) return res.status(401).json("Wrong username or password!");

        const bytes = CryptoJS.AES.decrypt(user.dataValues.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) return res.status(401).json("Wrong username or password!");

        const isIncludes = await OAuth.findOne({where: {user: user.dataValues.id}})

        if(isIncludes !== null){

            let tokenObj = {};
            tokenObj['access_token'] = isIncludes.dataValues.access_token;
            tokenObj['refresh_token'] = isIncludes.dataValues.refresh_token;

            res.cookie('accessToken', tokenObj.access_token, {maxAge: 12 * 60 * 60 * 1000, httpOnly: true})
            res.cookie('refreshToken', tokenObj.refresh_token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            res.status(200).json({...tokenObj, user: user.dataValues});
            // res.status(200).json('NIHERA NEMA');

        } else {
            const tokenPair = jwtService.generateTokenPair();
            res.cookie('accessToken', tokenPair.access_token, {maxAge: 12 * 60 * 60 * 1000, httpOnly: true})
            res.cookie('refreshToken', tokenPair.refresh_token, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            await OAuth.create({...tokenPair, user: user.dataValues.id})

            res.status(200).json({...tokenPair, user: userNormalizator(user.dataValues)})
        }
    } catch (e) {
        next(e);
    }
}

module.exports.forgotPassword = async (req, res, next) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({where: {email: email}})

        const actionToken = jwtService.generateActionToken();

        await emailService.sendMail(
            email,
            emailActionEnum.FORGOT,
            {email: email, userName: user.dataValues.username, actionToken: actionToken.action_token}
        );

        await OAuthAction.create({...actionToken, user: user.dataValues.id});

        res.json({...actionToken, user: userNormalizator(user.dataValues)});
    } catch (e) {
        next(e);
    }
}

module.exports.changePassword = async (req, res, next) => {
    try {
        const { body: {password, action_token}} = req;
        let updated = false;

        const decoded = jwt_decode(action_token);

        if(decoded.exp * 1000 < Date.now()){
            await OAuthAction.destroy({where: {action_token: action_token}});

            return res.status(200).json(updated);
        }

        const actionToken = await OAuthAction.findOne({where: {action_token: action_token}});

        const hashedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
        await User.update({password: hashedPassword}, {where: {id: actionToken.dataValues.user}});

        await OAuthAction.destroy({where: {action_token: action_token}});
        await OAuth.destroy({where: {id: actionToken.dataValues.user}});

        const user = await User.findOne({where: {id: actionToken.dataValues.user}});

        await emailService.sendMail(
            user.dataValues.email,
            emailActionEnum.CHANGE,
            {email: user.dataValues.email, userName: user.dataValues.username}
        );

        updated = true;

        res.status(200).json(updated);
    } catch (e) {
        next(e);
    }
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        const {accessToken} = req.cookies

        await OAuth.destroy({where: {access_token: accessToken}});

        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.json('User is logout');
    } catch (e) {
        next(e);
    }
}

module.exports.verifyEmail = async (req, res, next) => {
    try {
        await emailService.sendMail(
            req.body.email,
            emailActionEnum.ACTIVATE,
            {email: req.body.email, code: req.body.verifyCode}
        );

        res.status(200).json('Accepted');
    } catch (e) {
        next(e);
    }
}


module.exports.test = async (req, res, next) => {
    try {
        console.log(req.body)
        console.log(req.user)

        res.status(200).json('Accepted');
    } catch (e) {
        next(e);
    }
}
