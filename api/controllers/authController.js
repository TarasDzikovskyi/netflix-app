const User = require("../models/User");
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

module.exports.createUser = async (req, res, next) => {
    try{
        console.log(req.body);
        // console.log("req");
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        });

        const user = await newUser.save();
        console.log(user)
        res.status(201).json(user)
    } catch(e){
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

        const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, {expiresIn: '5d'})

        console.log(user._doc)
        const {password, ...info} = user;

        res.status(200).json({...info, accessToken})
    } catch(e){
        next(e);
    }
}