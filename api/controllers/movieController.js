const Movie = require('../models/Movie')

module.exports.createMovie = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            const newMovie = new Movie(req.body);

            const savedMovie = await newMovie.save()
            
            res.status(201).json(savedMovie)
        } else {
            req.status(403).json("You are not allowed!")
        }

    } catch(e){
        next(e);
    }
}

module.exports.updateMovie = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            
            res.status(200).json(updatedMovie)
        } else {
            req.status(403).json("You are not allowed!")
        }

    } catch(e){
        next(e);
    }
}

module.exports.deleteMovie = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            await Movie.findByIdAndDelete(req.params.id)
            
            res.status(200).json("The movie has been deleted...")
        } else {
            req.status(403).json("You are not allowed!")
        }
    } catch(e){
        next(e);
    }
}

module.exports.getSingleMovie = async (req, res, next) => {
    try{
        const movie = await Movie.findById(req.params.id)

        res.status(200).json(movie)
    } catch(e){
        next(e);
    }
}

module.exports.getRandomMovie = async (req, res, next) => {
    try{
        const type = req.query.type;
        let movie;

        if(type === 'series') {
            movie = await Movie.aggregate([
                {$match: {$isSeries: true}},
                {$sample: {size: 1}}
            ])
        } else {
            movie = await Movie.aggregate([
                {$match: {$isSeries: false}},
                {$sample: {size: 1}}
            ])
        }

        res.status(200).json(movie)
    } catch(e){
        next(e);
    }
}

module.exports.getAllMovie = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            const movies = await Movie.find()

            res.status(200).json(movies)
        } else {
            req.status(403).json("You are not allowed!")
        }
    } catch(e){
        next(e);
    }
}