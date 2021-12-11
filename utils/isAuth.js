const { cookieName } = require('../config');
const { User } = require('../models');
const { verifyToken } = require('./jwt');

module.exports = (req, res, next) => {
    const token = req.cookies[cookieName] || '';

    if (!token) {
        next();
        return;
    }

    verifyToken(token)
        .then(({ _id }) => User.findOne({ _id }))
        .then(({ username, _id }) => {
            req.user = { username, _id };
            res.locals.isLoggedIn = Boolean(req.user);
            next();
        })
        .catch((err) => next(err));
}