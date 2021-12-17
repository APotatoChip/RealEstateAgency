const jwt = require('./jwt');
const isAuth = require('./isAuth');
const isOwnerMiddleware = require('./isOwnerMiddleware');
const hasRentedCurrHome = require('./hasRentedMiddleware');
const isAvailable = require('./isAvailableMiddleware');
const findUser = require('./findUserMiddlerware');

module.exports = {
    jwt,
    isAuth,
    isOwnerMiddleware,
    hasRentedCurrHome,
    isAvailable,
    findUser
};