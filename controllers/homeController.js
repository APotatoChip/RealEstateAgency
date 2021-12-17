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
            res.render('./home/search.hbs');
        },
    },
    post: {
        search(req, res, next) {
            var searchParam = req.body.search;
            House
                .find({})
                .then((houses) => {
                    var housesCollection = [];
                    houses.forEach((house) => {
                        const houseName = house.name.toString().toLowerCase();
                        if (houseName.includes(searchParam)) {
                            housesCollection.push(house);
                        }
                    })
                    res.render('./home/search.hbs', { housesCollection });
                })

        }
    }
}