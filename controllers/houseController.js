const Logger = require('nodemon/lib/utils/log');
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
                .populate('rentedAHome')
                .then((house) => {
                    var arr = [];
                    if (house.rentedAHome.length != 0) {
                        house.rentedAHome.forEach((tenant) => {
                            arr.push(tenant.fullName);
                        })
                        arr.join(', ');
                    }
                    // console.log(house.rentedAHome)
                    console.log(arr);
                    res.render('./housing/details.hbs', {...house, "tenants": arr });
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
        },

        rent(req, res, next) {

            const userId = req.user._id;
            const userFullName = req.user.fullName;
            var nOfAvailablePlaces = 0;
            var rentsArr = [];

            House.findOne({ _id: req.params.houseId })
                .populate('rentedAHome')
                .then((house) => {
                    nOfAvailablePlaces = house.availablePieces;
                    rentsArr = house.rentedAHome;
                    nOfAvailablePlaces--;
                    rentsArr.push(userId);

                    console.log(house.rentedAHome[0].fullName)
                }).then(() => {

                    House
                        .updateOne({ _id: req.params.houseId }, { $set: { availablePieces: nOfAvailablePlaces, rentedAHome: rentsArr } })
                        .then((result) => {

                            res.redirect(`/housing/details/${req.params.houseId}`);
                        })

                })


        }
    },
    post: {
        create(req, res, next) {
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