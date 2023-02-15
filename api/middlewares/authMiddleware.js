const ErrorHandler = require('../errors/ErrorHandler');
const { jwtService } = require('../services');
const { OAuth } = require('../models/models');


module.exports = {
    validateAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');
            console.log(access_token)

            if (!access_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await jwtService.verifyToken(access_token, 'access');

            const tokenFromDB = await OAuth.findOne({where: { access_token }});
            console.log(tokenFromDB)

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Invalid token');
            }
            req.user = tokenFromDB.dataValues;

            next();
        } catch (e) {
            next(e);
        }
    },

    validateActionToken: async (req, res, next) => {
        try {
            const { action_token } = req.body;
            // const action_token = req.get('Authorization');

            if (!action_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await jwtService.verifyToken(action_token, 'action');

            const tokenFromDB = await OAuth.findOne({where: { action_token }});

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Invalid token');
            }
            req.user = tokenFromDB.user;

            next();
        } catch (e) {
            next(e);
        }
    },

    validateRefreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get('Authorization');

            if (!refresh_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await jwtService.verifyToken(refresh_token, 'refresh');

            const tokenFromDB = await OAuth.findOne({where: { refresh_token }});

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Invalid token');
            }
            req.user = tokenFromDB.user;

            next();
        } catch (e) {
            next(e);
        }
    }
};