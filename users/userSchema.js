const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    profilePhoto: URL,
    username: String,
    email: String,
    firstName: String,
    lastName: String,
    country: String,
})

module.exports = mongoose.model('user',userSchema)