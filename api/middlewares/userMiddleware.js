const {User} = require("../models");


module.exports.isEmailPresent = async (req, res, next) => {
    try{
        const {email} = req;

        const isPresent = await User.findOne({email: email});

        if(isPresent) return false;

        next();
    } catch(e){
        next(e)
    }
}