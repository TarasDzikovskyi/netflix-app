const router = require('express').Router()

const {movieController} = require('../controllers')
const verify = require('../verifyToken')


router.post('/', movieController.createMovie)

router.put('/:id', movieController.updateMovie)

router.delete('/:id', movieController.deleteMovie)

router.get('/find/:movie_id', movieController.getSingleMovie)

router.get('/random', movieController.getRandomMovie)

router.get('/', movieController.getAllMovie)


module.exports = router;