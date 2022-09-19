const router = require('express').Router()

const {listController} = require('../controllers')
const {verify} = require("jsonwebtoken");


router.post('/', listController.createList)

router.delete('/:id', verify, listController.deleteList)

router.get('/', verify, listController.getAllLists)

module.exports = router;