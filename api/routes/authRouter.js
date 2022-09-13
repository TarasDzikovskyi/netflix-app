const router = require('express').Router()

const {authController} = require('../controllers')

router.post('/register', authController.createUser)

router.post('/login', authController.login)

module.exports = router;