const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    city: String,
    country: String,
})

module.exports = mongoose.model('cities',citySchema)