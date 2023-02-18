const router = require('express').Router();

const {authController} = require('../controllers');
const {userMiddleware, authMiddleware} = require('../middlewares');

router.post('/register', authController.createUser);

router.post('/check', userMiddleware.isEmailPresent);

router.post('/login', authController.login);

router.post('/forgot', authController.forgotPassword);

router.post('/reset', authController.changePassword);

router.post('/verify', authController.verifyEmail);

router.post('/logout', authController.logoutUser);

router.post('/test', authMiddleware.validateAccessToken, authController.test)

module.exports = router;