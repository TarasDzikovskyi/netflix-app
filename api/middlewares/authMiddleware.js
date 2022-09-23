const ErrorHandler = require('../errors/ErrorHandler');
const { jwtService } = require('../services');
const { OAuth } = require('../database');

module.exports = {
    isEmailPresent: (req, res, next) => {

    },

    validateAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            if (!access_token) {
                throw new ErrorHandler(401, 'No token');
            }

            await jwtService.verifyToken(access_token, 'access');

            const tokenFromDB = await OAuth.findOne({ access_token }).populate('user');

            if (!tokenFromDB) {
                throw new ErrorHandler(401, 'Invalid token');
            }
            req.user = tokenFromDB.user;

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

            const tokenFromDB = await OAuth.findOne({ action_token }).populate('user');

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

            const tokenFromDB = await OAuth.findOne({ refresh_token }).populate('user');

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