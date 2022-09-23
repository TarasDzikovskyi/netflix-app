const { Schema, model } = require('mongoose');

const OAuthSchema = new Schema({
    action_token: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    }
}, { timestamps: true });

module.exports = model('oauthAction', OAuthSchema);