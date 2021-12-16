const { home } = require('nodemon/lib/utils');
const { homeController } = require('../controllers');

module.exports = (router) => {
    router.get('/', homeController.get.home);
    router.get('/search', homeController.get.search);

    return router;
};