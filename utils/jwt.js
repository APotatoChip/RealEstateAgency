const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = {
    createToken(_id) {
        return jwt.sign({ _id }, secret, { expiresIn: '1h' });
    },
    verifyToken(token) {

    }
}