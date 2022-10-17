module.exports = {
    userNormalizator: (userToNormalize) => {
        const fieldsToRemove = [
            'password',
            '_v'
        ];

        fieldsToRemove.forEach((field) => {
            delete userToNormalize[field];
        });

        return userToNormalize;
    }
};