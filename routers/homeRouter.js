const { homeController } = require('../controllers');

module.exports = (router) => {
    router.get('/', homeController.get.home);
    router.get('/search', homeController.get.search);

    router.post('/search', homeController.post.search);

    return router;
};