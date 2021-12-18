const jwt = require('./jwt');
const isAuth = require('./isAuth');
const isOwnerMiddleware = require('./isOwnerMiddleware');
const hasRentedCurrHome = require('./hasRentedMiddleware');
const isAvailable = require('./isAvailableMiddleware');
const registerValidator = require('./regitserValidator');
const formValidator = require('./formValidator');
const loginValidator = require('./loginValidator');
const isAuthNeededMidleware = require('./isAuthNeededMiddleware');

module.exports = {
    jwt,
    isAuth,
    isOwnerMiddleware,
    hasRentedCurrHome,
    isAvailable,
    registerValidator,
    formValidator,
    loginValidator,
    isAuthNeededMidleware
};