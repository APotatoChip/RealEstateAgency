const { cookieName } = require('../config');
const { User } = require('../models');
const { verifyToken } = require('./jwt');

module.exports = (req, res, next) => {
    const token = req.cookies[cookieName] || '';

    if (!token) {
        res.locals.isLoggedIn = false;
        next();
        return;
    }

    verifyToken(token)
        .then(({ _id }) =>
            User.findOne({ _id })

        )
        .then(({ username, _id }) => {
            req.user = { username, _id };
            res.locals.isLoggedIn = true;
            next();
        })
        .catch((err) => next(err));
}