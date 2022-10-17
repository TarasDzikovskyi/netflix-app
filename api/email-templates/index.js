const emailActionEnum = require('../config/emailActionEnum');

module.exports = {
    [emailActionEnum.CREATE]: {
        templateName: 'create',
        subject: 'Hello, you are created account!!!'
    },
    [emailActionEnum.FORGOT]: {
        templateName: 'forgot',
        subject: 'Complete your password reset request'
    },
    [emailActionEnum.CHANGE]: {
        templateName: 'change',
        subject: 'Your password has been changed'
    },
};