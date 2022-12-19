const {List, Movie} = require('../models/models')

module.exports.createList = async (req, res, next) => {
    try {
        if (req.user.isAdmin) {
            const newList = await List.create(req.body);

            res.status(200).json(newList);
        } else res.status(403).json("You are not allowed!")
    } catch (e) {
        next(e)
    }
}

module.exports.deleteList = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            await List.destroy({where: {id: req.params.id}})
            res.status(201).json("The list has been deleted...")
        } else {
            req.status(403).json("You are not allowed!")
        }
    } catch(e){
        next(e);
    }
}

module.exports.getAllLists = async (req, res, next) => {
    try{
        const typeQuery = req.query.type;
        const genreQuery = req.query.genre;
        let list = [];

        if(typeQuery) {
            if(genreQuery) {
                list = await List.findAll({where: {type: typeQuery, genre: genreQuery}, limit: 5})
            } else {
                list = await List.findAll({where: {type: typeQuery}, limit: 5})
            }
        } else {
            list = await List.findAll({limit: 5})
        }
        res.status(200).json(list);
    } catch(e){
        next(e);
    }
}
