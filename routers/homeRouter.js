const { homeController } = require('../controllers');
const { isAuthNeededMidleware } = require('../utils')

module.exports = (router) => {
    router.get('/', isAuthNeededMidleware(), homeController.get.home);
    router.get('/search', isAuthNeededMidleware(true), homeController.get.search);

    router.post('/search', isAuthNeededMidleware(true), homeController.post.search);

    return router;
};