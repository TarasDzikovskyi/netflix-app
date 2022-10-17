const router = require('express').Router()

const {authController} = require('../controllers')
const {userMiddleware} = require('../middlewares')

router.post('/register', authController.createUser)

router.post('/check', userMiddleware.isEmailPresent)

router.post('/login', authController.login)

router.post('/forgot', authController.forgotPassword)

router.post('/reset/:token', authController.changePassword)

router.post('/logout', authController.logoutUser)

module.exports = router;