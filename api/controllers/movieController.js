const {Movie} = require('../models/models')
const userUtil = require("../utils/user.util");
const {Sequelize, Op} = require('sequelize')
const {getAll} = require("../services/movies.service");

module.exports.createMovie = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            const newMovie = await Movie.create(req.body);

            res.status(201).json(newMovie)
        } else {
            req.status(403).json("You are not allowed!")
        }
    } catch(e){
        next(e);
    }
}

module.exports.updateMovie = async (req, res, next) => {
    try{
        await Movie.update(req.body, {where: {id: req.params.id}})

        const updatedMovie = await Movie.findOne({where: {id: req.params.id}})

        res.status(200).json(updatedMovie.dataValues)

    } catch(e){
        next(e);
    }
}

module.exports.deleteMovie = async (req, res, next) => {
    try{
        if(req.user.isAdmin){
            await Movie.destroy({where: {id: req.params.id}})
            
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
        const movie = await Movie.findOne({where: {id: req.params.movie_id}})

        res.status(200).json(movie.dataValues)
    } catch(e){
        next(e);
    }
}

module.exports.getRandomMovie = async (req, res, next) => {
    try{
        const type = req.query.type;
        const netflix = req.query.isNetflix;
        let movie;
        const search = req.query.search;

        if(type === 'series') {
            movie = await Movie.findAll({order: Sequelize.literal('random()'), where: [{isSeries: true}], limit: 1 });

        } else if(type === 'random') {
            movie = await Movie.findAll({ order: Sequelize.literal('random()'),  where: [{isNetflix: 'false'}], limit: 18 });

        }  else if(search !== undefined && search.length !== 0) {
            movie = await Movie.findAll({where: {title: {[Op.like]: '%'+search+'%'}}});

        }  else if(netflix) {
            movie = await getAll(req.query);

        } else {
            movie = await Movie.findAll({order: Sequelize.literal('random()'), where: [{isSeries: false}], limit: 1 });
        }

        res.status(200).json(movie);
    } catch(e){
        next(e);
    }
}

module.exports.getAllMovie = async (req, res, next) => {
    try{
        const movies = await Movie.findAll()

        res.status(200).json(movies)
    } catch(e){
        next(e);
    }
}