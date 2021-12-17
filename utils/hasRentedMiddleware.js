const { House } = require('../models');

module.exports = (req, res, next) => {
    const user = res.locals.isLoggedIn;
    const path = "/details";

    if (!user || !req.path.includes(path) || res.locals.isOwner) {
        next();
        return;
    }

    const currUserId = req.user._id;
    const houseId = req.url.split("/")[3];
    const isOwnerOfCurrHouse = res.locals.isOwner;


    House.findOne({ _id: houseId })
        .then((house) => {
            var nOfAvailablePlaces = house.availablePieces;
            var currRents = house.rentedAHome;


            if (nOfAvailablePlaces > 0 && isOwnerOfCurrHouse == false) {

                if (currRents.length > 0) {

                    currRents.forEach((tenantId) => {
                        if (tenantId.toString() === currUserId.toString()) {

                            res.locals.hasRentedCurrHouse = true;

                        } else {;
                            res.locals.hasRentedCurrHouse = false;

                        }
                    });
                    next();
                } else {
                    res.locals.hasRentedCurrHouse = false;
                    next();
                }

            }
        })
}