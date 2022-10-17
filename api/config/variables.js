module.exports = {
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