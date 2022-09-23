const CryptoJS = require('crypto-js')
const User = require('../models/User')

module.exports.updateUser = async (req, res, next) => {
    try{
        if(req.user.id === req.params.id || req.user.isAdmin){

            console.log(req.body)

        //     if(req.body.password){
        //         req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        //     }
        //
        //     const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        //     res.status(200).json(updateUser)
        // } else {
        //     req.status(403).json("You can update only your account!")
        }
    } catch(e){
        next(e);
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try{
        if(req.user.id === req.params.id || req.user.isAdmin){
            await User.findByIdAndDelete(req.params.id);

            res.status(200).json("User has been deleted...")
        } else {
            req.status(403).json("You can delete only your account!")
        }
    } catch(e){
        next(e);
    }
}

module.exports.getSingleUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc
        res.status(200).json(info)
    } catch(e){
        next(e);
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try{
        const query = req.query.new;
        if(req.user.isAdmin){
            const users = query ? await User.find().sort({_id: 1}).limit(5) : await User.find();
            res.status(200).json(users)
        } else {
            req.status(403).json("You are not allowed to all users!")
        }
    } catch(e){
        next(e);
    }
}

module.exports.getAllUsersStats = async (req, res, next) => {
    try{
        const today = new Date();
        const lastYear = today.setFullYear(today.setFullYear() - 1);

        const monthsArray = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const data = await User.aggregate([
            {$project: {
                month: {$month: "$createAt"},
            }
        },
        {
            $group: {
                _id: '$month',
                total: {$sum: 1}
            }
        }
        ])
    res.status(200).json(data)
    } catch(e){
        next(e);
    }
}
