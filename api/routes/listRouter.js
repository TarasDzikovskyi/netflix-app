const router = require('express').Router()

const {listController} = require('../controllers')
const {verify} = require("jsonwebtoken");


router.post('/', listController.createList)

router.delete('/:id', listController.deleteList)

router.get('/', listController.getAllLists)

module.exports = router;