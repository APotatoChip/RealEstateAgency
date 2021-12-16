const { House } = require('../models');

module.exports = (req, res, next) => {

    const user = res.locals.isLoggedIn;
    const pathD = "/details";
    const pathR = "/rent";


    // if (!req.path.includes(pathR) || !req.path.includes(pathD)) {
    //     next();
    //     return;
    // }
    // if (!user && !req.path.includes(pathR)) {
    //     next();
    //     return;
    // }
    // if (!user && !req.path.includes(pathD)) {
    //     next();
    //     return;
    // }
    if ((user && req.path.includes(pathR)) || (user && req.path.includes(pathD))) {


        const houseId = req.url.split("/")[3];

        var nOfAvailablePlaces;
        var currRents;


        House.findOne({ _id: houseId })
            .then((house) => {
                nOfAvailablePlaces = house.availablePieces;
                currRents = house.rentedAHome;


                if (Number(nOfAvailablePlaces) === 0) {

                    res.locals.avPlaces = false;
                    res.locals.noTenants = false;
                    next();


                } else if ((Number(nOfAvailablePlaces) > currRents.length) && (currRents.length > 0)) {
                    res.locals.avPlaces = true;
                    res.locals.noTenants = false;
                    next();


                } else {
                    res.locals.avPlaces = true;
                    res.locals.noTenants = true;
                    next();

                }
            })
            .catch((err) => next(err));





    } else {
        next();
        return;
    }



}