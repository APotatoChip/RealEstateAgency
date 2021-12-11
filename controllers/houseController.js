const req = require("express/lib/request");
const { registerDecorator } = require("handlebars");

module.exports = {
    get: {
        all(req, res, next) {
            res.render('./home/aprt-for-recent.hbs')
        },
        create(req, res, next) {
            res.render('./housing/create.hbs')
        },
        details(req, res, next) {
            res.render('./housing/details.hbs')
        },
        edit(req, res, next) {
            res.render('./housing/edit.hbs')
        },
    },
    post: {

    }
};