const { House } = require('../models');
module.exports = (req, res, next) => {

    const user = res.locals.isLoggedIn;
    const path = "/details";
    const houseId = req.url.split("/")[3];

    if (!user || !req.path.includes(path)) {
        next();
        return;
    }


    House.findOne({ _id: houseId })
        .then((house) => {
            var nOfAvailablePlaces = house.availablePieces;
            var currRents = house.rentedAHome;

            if (Number(nOfAvailablePlaces) === 0) {
                res.locals.availablePlaces = false;
                res.locals.noTenants = false;

            } else if ((Number(nOfAvailablePlaces) > currRents.length) && (currRents.length > 0)) {
                res.locals.availablePlaces = true;
                res.locals.noTenants = false;
                console.log('hre');
            } else {
                res.locals.availablePlaces = true;
                res.locals.noTenants = true;
            }

            next();
        })
}