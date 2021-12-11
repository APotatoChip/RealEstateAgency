module.exports = {
    get: {
        login(req, res, next) {
            res.render('./user/login.hbs', { sth: 5 })
        },
    }
};