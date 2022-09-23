const {User, OAuth} = require("../models");
const CryptoJS = require('crypto-js')
const { generateTokenPair } = require("../services/jwt.service");

module.exports.createUser = async (req, res, next) => {
    try {
        if(req.body.password) {
            const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

            let createdUser = await User.create({ ...req.body, password: hashedPassword });

            const userToReturn = userUtil.userNormalizator(createdUser.toObject());
            res.status(201).json(userToReturn);
        } else res.status(401).json("Password is required!")
    } catch (e) {
        next(e);
    }
}

module.exports.login = async (req, res, next) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong username or password!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
        
        originalPassword !== req.body.password && res.status(401).json("Wrong username or password!");

        const tokenPair = generateTokenPair();

        await OAuth.create({...tokenPair, user: user._id})

        res.status(200).json({...tokenPair, user: userNormalizator(user)})
    } catch(e){
        next(e);
    }
}

module.exports.forgotPassword = async (req, res, next) => {
    try {
        const { user, body: { email } } = req;

        const actionToken = jwtService.generateActionToken();

        await emailService.sendMail(
            email,
            emailActionEnum.FORGOT,
            { userName: user.name, actionToken: actionToken.action_token }
        );

        await OAuthAction.create({ ...actionToken, user: user._id });

        res.json({ ...actionToken, user: userNormalizator(user) });
    } catch (e) {
        next(e);
    }
},

module.exports.changePassword = async (req, res, next) => {
    try {
        const { action_token } = req.body;

        const { user: { _id }, body: { password } } = req;

        const hashedPassword = await passwordService.hash(password);
        await User.findByIdAndUpdate({ _id }, { password: hashedPassword });

        await OAuthAction.deleteOne({ action_token });
        await OAuth.deleteMany({ _id });

        res.status(200);
    } catch (e) {
        next(e);
    }
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        const access_token = req.get('Authorization');

        await OAuth.deleteOne({ access_token });

        res.json('User is logout');
    } catch (e) {
        next(e);
    }
}