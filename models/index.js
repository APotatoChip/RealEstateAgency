const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const getUserModel = require('./User');
const getHouseModel = require('./House');

module.exports = {
    User: getUserModel(mongoose, bcrypt),
    House: getHouseModel(mongoose)
}