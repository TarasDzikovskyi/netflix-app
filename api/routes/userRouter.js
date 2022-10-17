const router = require('express').Router()

const {userController} = require('../controllers')
const verify = require('../verifyToken')


router.patch('/:id', userController.updateUser)

router.delete('/:id', verify, userController.deleteUser)

router.get('/find/:id', userController.getSingleUser)

router.get('/', verify, userController.getAllUsers)

router.get('/stats', userController.getAllUsersStats)

module.exports = router;