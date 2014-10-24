/**
 * Created by Jonas on 24-10-2014.
 */
var mongoose = require('mongoose');

var UserSchema   = new mongoose.Schema({
    username: String,
    email: String,
    pw: String,
    created: {type: Date, default: new Date()}
});

module.exports = mongoose.model('User', UserSchema);