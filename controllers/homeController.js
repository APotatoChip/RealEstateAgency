const { House } = require('../models');

module.exports = {
    get: {
        home(req, res, next) {
            House
                .find({})
                .then((houses) => {
                    res.render('./home/home.hbs', { houses });

                })
                .catch((err) => console.log(err));


        },
        search(req, res, next) {

            res.render('./housing/search.hbs');


        },
    }
}