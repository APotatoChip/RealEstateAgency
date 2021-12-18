const { userController } = require('../controllers');
const { registerValidator, loginValidator, isAuthNeededMidleware } = require('../utils');

module.exports = (router) => {
    router.get('/login', isAuthNeededMidleware(), userController.get.login);
    router.get('/register', isAuthNeededMidleware(), userController.get.register);
    router.get('/logout', isAuthNeededMidleware(true), userController.get.logout);

    router.post('/register', isAuthNeededMidleware(), registerValidator, userController.post.register);
    router.post('/login', isAuthNeededMidleware(), loginValidator, userController.post.login);

    return router;
};