const { houseController } = require('../controllers');

module.exports = (router) => {

    router.get('/all', houseController.get.all);
    router.get('/create', houseController.get.create);
    router.get('/details', houseController.get.details);
    router.get('/edit', houseController.get.edit);

    router.post('/create', houseController.post.create);

    return router;
}