// Setup Express and Middlewares
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

module.exports = (express, app) => {
    app.use(express.static('public'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(cookieParser());
    var hbs = exphbs.create({
        layoutsDir: 'views',
        defaultLayout: 'base-layout.hbs',
        oartialsDir: 'views/partials',
        extname: 'hbs'
    });
    //  Setup View Engine
    app.engine('hbs', hbs.engine);
    app.set('viewengine', 'hbs');
};