const CryptoJS = require('crypto-js')
const {User} = require('../models')

module.exports.updateUser = async (req, res, next) => {
    try {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }

        const updateUser = await User.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )

        res.status(200).json(updateUser);
    } catch (e) {
        next(e);
    }
}

module.exports.deleteUser = async (req, res, next) => {
    try {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            await User.findByIdAndDelete(req.params.id);

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
        const user = await User.findById(req.params.id);
        const {password, ...info} = user._doc
        res.status(200).json(info)
    } catch (e) {
        next(e);
    }
}

module.exports.getAllUsers = async (req, res, next) => {
    try {
        const query = req.query.new;
        if (req.user.isAdmin) {
            const users = query ? await User.find().sort({_id: 1}).limit(5) : await User.find();
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
    try{
        const { user_id, movie_id } = req.body;
        console.log(req.body)

        // const user = await User.findById(user_id);
        // // const movie = await Movie.findById(movie_id);
        // const { cart } = user;

        // cart.find(
        //     (item) => item._id.toString() === movie_id.toString()
        // ) ? console.log('Error') : user.cart.push(movie_id);

        // const updatedUser = await User.findOneAndUpdate({ _id: user_id }, user, { new: true });
        let user = {
            _id: '6320d6f76551c535bd1a5fc0',
            username: "otsocity",
            email: "tarasdz12367@gmail.com",
            isAdmin: true,
            cart: [movie_id]
        }

        const tokenPair = {access_token: req.cookies.accessToken, refresh_token: req.cookies.refreshToken}

        res.status(200).json({...tokenPair, user});
    } catch(e){
        next(e);
    }
}

module.exports.removeFromCart = async (req, res, next) => {
    try{
        const { user_id, movie_id } = req.params;

            // const user = await User.findById(user_id);

            // const cart = user.cart.filter(
            //     (rev) => rev._id.toString() !== pub_id.toString()
            // );

            // const updatedUser = await User.findByIdAndUpdate({ _id: user_id }, { cart }, { new: true });

            // res.status(200).json(updatedUser);
        
    } catch(e){
        next(e);
    }
}