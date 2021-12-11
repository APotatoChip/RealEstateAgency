// Setup Express and Middlewares
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const { isAuth } = require('../utils');

module.exports = (express, app) => {

    app.use(express.static('static'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(cookieParser());

    app.use(isAuth);

    //  Setup View Engine 
    var hbs = exphbs.create({
        layoutsDir: 'views',
        defaultLayout: 'base-layout.hbs',
        partialsDir: 'views/partials',
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('viewengine', 'hbs');
};