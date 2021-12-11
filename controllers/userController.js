module.exports = {
    get: {
        login(req, res, next) {
            res.render('./user/login.hbs');
        },
        register(req, res, next) {
            res.render('./user/register.hbs');
        }
    }
};