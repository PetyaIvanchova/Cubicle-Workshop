const User = require('../models/User');
const jwt = require('../lib/jsonwebtoken');
const config = require('../config');

exports.getUserByUsername = (username) => User.findOne({username});

exports.register = (username, password) => User.create({username, password});

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username);

    const isValid = await User.validatePassword(password);
    if(!user || !isValid){
        throw `Error`
    };

    const payload = {username: user.username};
    const token = await jwt.sign(payload, config.SECRET);

    return token;
}