// DB setup

const mongoose = require('mongoose');
const dbConnectionString = require('./').dbUrl;

const dbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = () => {
    return mongoose.connect(dbConnectionString, dbConnectionOptions);
}