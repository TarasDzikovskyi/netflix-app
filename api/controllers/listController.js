const {List, Movie} = require('../models')

module.exports.createList = async (req, res, next) => {
    try {
        // if (req.user.isAdmin) {
            const newList = new List(req.body);

            const savedList = await newList.save();
            res.status(200).json(savedList);
        // } else res.status(403).json("You are not allowed!")

    } catch (e) {
        next(e)
    }
}

module.exports.deleteList = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            await List.findByIdAndDelete(req.params.id)
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
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}}
                ]);
            } else {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}}
                ]);
            }
        } else {
            list = await List.aggregate([{$sample: {size: 10}}])
        }
        res.status(200).json(list);
    } catch(e){
        next(e);
    }
}