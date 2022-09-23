const router = require('express').Router()

const {authController} = require('../controllers')
const {userMiddleware} = require('../middlewares')

router.post('/register', userMiddleware.isEmailPresent, authController.createUser)

router.post('/login', authController.login)

module.exports = router;