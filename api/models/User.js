const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        profilePic: {type: String, default: ""},
        isAdmin: {type: Boolean, default: false},
        plan: {type: String, default: ""},
        list: {type: String, default: ""},
        cart: {type: Array, default: []},
    },
    {timestamps: true}
)

module.exports = mongoose.model("User", UserSchema)