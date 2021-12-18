const { houseController } = require('../controllers');
const { isAuthNeededMidleware } = require('../utils');

module.exports = (router) => {

    router.get('/all', houseController.get.all);
    router.get('/create', isAuthNeededMidleware(true), houseController.get.create);
    router.get('/details/:houseId', isAuthNeededMidleware(true), houseController.get.details);
    router.get('/edit/:houseId', isAuthNeededMidleware(true), houseController.get.edit);
    router.get('/delete/:houseId', isAuthNeededMidleware(true), houseController.get.delete);
    router.get('/rent/:houseId', isAuthNeededMidleware(true), houseController.get.rent);

    router.post('/create', isAuthNeededMidleware(true), houseController.post.create);
    router.post('/edit/:houseId', isAuthNeededMidleware(true), houseController.post.edit);




    return router;
}