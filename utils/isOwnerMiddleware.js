const { House } = require('../models');

module.exports = (req, res, next) => {
    const user = res.locals.isLoggedIn;
    const path = "/details";

    if (user == false || !req.path.includes(path)) {
        next();
        return;
    }


    const currUserId = req.user._id;
    const houseId = req.url.split("/")[3];

    console.log(req);
    House.findOne({ _id: houseId })
        .then((house) => {

            const houseOwnerId = house.owner;

            if (houseOwnerId.toString() == currUserId.toString()) {



                res.locals.isOwner = true;
                next();

            } else {
                res.locals.isOwner = false;

                next();
            }
        })
        .catch((err) => next(err));



}