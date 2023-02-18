require('dotenv').config()

module.exports = {
    PASSWORD_REGEX: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,120})/),
    EMAIL_REGEX: new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/),

    ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY || 'Secret',
    REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY || 'Secret_2',
    ACTION_SECRET_KEY: process.env.ACTION_SECRET_KEY || 'Secret_3',

    ACTION_TIME: '1h',
    ACCESS_TIME: '1d',
    REFRESH_TIME: '7d',

    ACTION: 'action',
    ACCESS: 'access',
    REFRESH: 'refresh',

    AWS_S3_NAME: process.env.AWS_S3_NAME || '',
    AWS_S3_REGION: process.env.AWS_S3_REGION || '',
    AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY || '',
    AWS_S3_SECRET_KEY: process.env.AWS_S3_SECRET_KEY || '',
    AMAZON_CUT: 'amazonaws.com/',

    PHOTO_MAX_SIZE: 5 * 1024 * 1024,
    MIMETYPES: {
        PHOTO: [
            'image/jpeg',
            'image/png',
            'image/jpg'
        ]
    },

    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:3000'
}