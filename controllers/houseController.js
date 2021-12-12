const { House } = require('../models');

module.exports = {
    get: {
        all(req, res, next) {
            House
                .find({})
                .lean()
                .then((houses) => {
                    res.render('./home/aprt-for-recent.hbs', { houses });

                })
                .catch((err) => console.log(err));

        },
        create(req, res, next) {

            res.render('./housing/create.hbs');
        },
        details(req, res, next) {
            House
                .findOne({ _id: req.params.houseId })
                .lean()
                .then((house) => {
                    res.render('./housing/details.hbs', {...house });
                })
        },
        edit(req, res, next) {
            House
                .findOne({ _id: req.params.houseId })
                .then((house) => {

                    res.render('./housing/edit.hbs', house);
                });
        },
        delete(req, res, next) {
            House
                .deleteOne({ _id: req.params.houseId })
                .then((result) => {
                    res.redirect('/housing/all');
                });
        }
    },
    post: {
        create(req, res, next) {;
            House.create({...req.body, owner: req.user._id })
                .then((createdHouse) => {
                    res.redirect('/housing/all');
                });
        },
        edit(req, res, next) {
            const { houseId } = req.params;
            House
                .updateOne({ _id: req.params.houseId }, { $set: {...req.body } })
                .then((updatedHouse) => {
                    res.redirect(`/housing/details/${houseId}`);
                });
        }
    }
};