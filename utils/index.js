const jwt = require('./jwt');
const isAuth = require('./isAuth');
const isOwnerMiddleware = require('./isOwnerMiddleware');
const hasRentedCurrHome = require('./hasRentedMiddleware');
const isAvailable = require('./isAvailableMiddleware');


module.exports = {
    jwt,
    isAuth,
    isOwnerMiddleware,
    hasRentedCurrHome,
    isAvailable
};