const jwt = require('./jwt');
const isAuth = require('./isAuth');
const isOwnerMiddleware = require('./isOwnerMiddleware');
const hasRentedCurrHome = require('./hasRentedMiddleware');
const isAvailable = require('./isAvailableMiddleware');
const registerValidator = require('./regitserValidator');
const formValidator = require('./formValidator');
const loginValidator = require('./loginValidator');
const isAuthNeededMidleware = require('./isAuthNeededMiddleware');
const createValidator = require('./createValidator');
const editValidator = require('./editValidator');

module.exports = {
    jwt,
    isAuth,
    isOwnerMiddleware,
    hasRentedCurrHome,
    isAvailable,
    registerValidator,
    formValidator,
    loginValidator,
    isAuthNeededMidleware,
    createValidator,
    editValidator
};