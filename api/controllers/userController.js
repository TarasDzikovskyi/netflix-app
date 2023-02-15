const CryptoJS = require('crypto-js')
const {User, Movie} = require('../models/models')

module.exports.updateUser = async (req, res, next) => {
    try {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }

        // if (req.files && req.files.profilePic) {
        //     const s3Response = s3Service.uploadFile(req.files.profilePic, 'users', createdUser.dataValues.id);
        //     createdUser = await User.update(
        //         {profilePic: s3Response.Location},
        //         {where: {id}}
        //     );
        // }

        await User.update(req.body, {where: {id: req.params.id}})

        const updatedUser = await User.findOne({where: {id: req.params.id}})

        res.status(200).json(updatedUser.dataValues);
    } catch (e) {
        next(e);
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            await User.destroy({where:{id: req.params.id}});

            res.status(200).json("User has been deleted...")
        } else {
            req.status(403).json("You can delete only your account!")
        }
    } catch (e) {
        next(e);
    }
}

module.exports.getSingleUser = async (req, res, next) => {
    try {
        const user = await User.findOne({where: {id: req.params.id}});

        res.status(200).json(user.dataValues)
    } catch (e) {
        next(e);
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const query = req.query.new;
        if (req.user.isAdmin) {
            const users = query ? await User.findAll.sort({id: 1}).limit(5) : await User.findAll();
            res.status(200).json(users)
        } else {
            req.status(403).json("You are not allowed to all users!")
        }
    } catch (e) {
        next(e);
    }
}

module.exports.getAllUsersStats = async (req, res, next) => {
    try {
        const today = new Date();
        const lastYear = today.setFullYear(today.setFullYear() - 1);

        const monthsArray = [
            "January", "February", "March", "April",
            "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        const data = await User.aggregate([
            {
                $project: {
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
    } catch (e) {
        next(e);
    }
}

module.exports.addToCart = async (req, res, next) => {
    try {
        const {user_id, movie_id} = req.body;
        let cart_length = 0
        let user

        const find_user = await User.findOne({where: {id: user_id}});
        if(find_user.dataValues.cart === null) find_user.dataValues.cart = []
        cart_length = find_user.dataValues.cart.length

        find_user.dataValues.cart.find((item) => String(item) === String(movie_id)) ? console.log('Error') : find_user.dataValues.cart.push(movie_id);
        const tokenPair = {access_token: req.cookies.accessToken, refresh_token: req.cookies.refreshToken}

        if(cart_length !== find_user.dataValues.cart.length)
        await User.update(find_user.dataValues, {where: {id: user_id}})

        const updatedUser = await User.findOne({where: {id: user_id}})
        user = updatedUser.dataValues

        res.status(200).json({...tokenPair, user});
    } catch (e) {
        next(e);
    }
}

module.exports.removeFromCart = async (req, res, next) => {
    try {
        const {user_id, movie_id} = req.body;

        const find_user = await User.findOne({where: {id: user_id}});
        const new_cart = find_user.dataValues.cart.filter((item) => String(item) !== String(movie_id));
        find_user.dataValues.cart = new_cart
        const tokenPair = {access_token: req.cookies.accessToken, refresh_token: req.cookies.refreshToken}

        await User.update({cart: new_cart}, {where: {id: user_id}})

        const updatedUser = await User.findOne({where: {id: user_id}})
        const user = updatedUser.dataValues

        res.status(200).json({...tokenPair, user});
        } catch (e) {
        next(e);
    }
}