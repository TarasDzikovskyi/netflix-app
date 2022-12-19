const {User} = require("../models/models");

module.exports.isEmailPresent = async (req, res, next) => {
    try{
        const {email} = req.body;

        const isPresent = await User.findOne({where: {email: email}});

        if(isPresent === null) res.json("new");
        else res.json("exist");
    } catch(e){
        next(e)
    }
}