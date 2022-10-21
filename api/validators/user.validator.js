const Joi = require('joi');
const { PASSWORD_REGEX, EMAIL_REGEX } = require('../config/variables');

const createUserValidator = Joi.object({
    username: Joi
        .string()
        .alphanum()
        .min(2)
        .max(30)
        .trim()
        .required(),
    password: Joi.string().regex(PASSWORD_REGEX).required(),
    email: Joi.string().regex(EMAIL_REGEX).required(),
});

const updateUserValidator = Joi.object({
    username: Joi.string().alphanum().min(2).max(30),
    email: Joi.string().regex(EMAIL_REGEX),
});

module.exports = { createUserValidator, updateUserValidator };