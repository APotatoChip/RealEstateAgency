const { body } = require('express-validator');

module.exports = [
    body('fullName', 'Name should be in the following format: Alexander Parkinson').escape().matches(/[A-Z][a-z]+\s[A-Z][a-z]+/),
    body('username', 'Username should be at least 5 characters long').isLength({ min: 5 }),
    body('password', 'Password should be at least 4 characters long').isLength({ min: 4 }),
    body('re-repeatPassword').custom(customRePasswordCheck)
];

function customRePasswordCheck(repeatPassword, { req }) {
    if (repeatPassword !== req.body.password) {
        throw new Error("Passwords don't match");
    }
    return true;
}