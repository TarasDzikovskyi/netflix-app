const router = require('express').Router()

const {movieController} = require('../controllers')
const verify = require('../verifyToken')


router.post('/', verify, movieController.createMovie)

router.put('/:id', movieController.updateMovie)

router.delete('/:id', movieController.deleteMovie)

router.get('/find/:id', movieController.getSingleMovie)

router.get('/random', movieController.getRandomMovie)

router.get('/', movieController.getAllMovie)


module.exports = router;