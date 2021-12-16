const { User } = require('../models');
const { jwt } = require('../utils');
const { cookieName } = require('../config');

module.exports = {
    get: {
        login(req, res, next) {
            res.render('./user/login.hbs');
        },
        register(req, res, next) {
            res.render('./user/register.hbs');
        },
        logout(req, res, next) {
            res
                .clearCookie(cookieName)
                .redirect('/home');
        }
    },
    post: {
        login(req, res, next) {

            const { username, password } = req.body;
            console.log(req.body);
            User
                .findOne({ username })
                .then((user) => {
                    console.log(user);
                    return Promise.all([
                        user.comparePasswords(password),
                        user,
                    ])
                })
                .then(([isPasswordsMatched, user]) => {
                    if (!isPasswordsMatched) {
                        throw new Error('Wrong credentials');
                    }

                    const token = jwt.createToken(user._id);

                    res
                        .status(200)
                        .cookie(cookieName, token, { maxAge: 3600000 })
                        .redirect('/housing/all');

                })
                .catch((e) => {
                    console.log(e);
                })
        },
        register(req, res, next) {
            const { fullName, username, password } = {...req.body };
            User
                .findOne({ username })
                .then((user) => {
                    if (user) {
                        throw new Error('User already exists...');
                    }
                    return User.create({ fullName, username, password });
                })
                .then((createdUser) => {
                    res.redirect('/user/login');
                })
                .catch((e) => {
                    console.log(e);
                    res.redirect('/user/register');
                });


        }
    }
};