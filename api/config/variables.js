module.exports = {
    PASSWORD_REGEX: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,120})/),
    EMAIL_REGEX: new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$/),
    ACCESS_SECRET_KEY: process.env.ACCESS_SECRET_KEY || 'Secret',
    REFRESH_SECRET_KEY: process.env.REFRESH_SECRET_KEY || 'Secret_2',
    ACTION_SECRET_KEY: process.env.ACTION_SECRET_KEY || 'Secret_3',
    ACTION_TIME: '1h',
    ACCESS_TIME: '12h',
    REFRESH_TIME: '30d',
    ACTION: 'action',
    ACCESS: 'access',
    REFRESH: 'refresh',
}