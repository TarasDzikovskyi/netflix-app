const EmailTemplates = require('email-templates')
const nodemailer = require('nodemailer');
const path = require('path');
const allTemplate = require('../email-templates');
const ErrorHandler = require('../errors/ErrorHandler');

const templateParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates')
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'test@gmail.com',
        pass: '12345'
    }
});


const sendMail = async (userMail, emailAction, context = {}) => {
    const templateInfo = allTemplate[emailAction];

    if (!templateInfo) {
        throw new ErrorHandler(500, 'Wrong template name');
    }

    const { templateName, subject } = templateInfo;
    context.frontendURL = 'https://google.com';

    const html = await templateParser.render(templateName, context);

    return transporter.sendMail({
        from: 'No reply',
        to: userMail,
        subject,
        html
    });
};

module.exports = { sendMail };



