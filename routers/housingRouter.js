const { houseController } = require('../controllers');

module.exports = (router) => {

    router.get('/all', houseController.get.all);
    router.get('/create', houseController.get.create);
    router.get('/details/:houseId', houseController.get.details);
    router.get('/edit/:houseId', houseController.get.edit);
    router.get('/delete/:houseId', houseController.get.delete);

    router.post('/create', houseController.post.create);
    router.post('/edit/:houseId', houseController.post.edit);

    return router;
}