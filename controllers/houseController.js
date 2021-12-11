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

            res.render('./housing/details.hbs');
        },
        edit(req, res, next) {

            res.render('./housing/edit.hbs');
        },
    },
    post: {
        create(req, res, next) {;
            House.create({...req.body, owner: req.user._id })
                .then((createdHouse) => {
                    res.redirect('/housing/all');
                });
        }
    }
};