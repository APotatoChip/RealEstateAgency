const { userController } = require('../controllers');

module.exports = (router) => {
    router.get('/login', userController.get.login);
    router.get('/register', userController.get.register);

    router.post('/register', userController.post.register);
    router.post('/login', userController.post.login);

    return router;
};