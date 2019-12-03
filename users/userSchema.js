const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    profilePhoto: String,
    username: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    country: String,
    agree: Boolean
})

module.exports = mongoose.model('user',userSchema)