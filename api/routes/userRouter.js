const router = require('express').Router()

const {userController} = require('../controllers')
const verify = require('../verifyToken')


router.patch('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

router.get('/find/:id', userController.getSingleUser)

router.get('/', userController.getAllUsers)

router.get('/stats', userController.getAllUsersStats)

router.post('/cart', userController.addToCart)

router.patch('/remove/cart', userController.removeFromCart)

module.exports = router;