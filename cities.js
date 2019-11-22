const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    city: String,
    country: String,
    objectId: [{type: mongoose.Schema.Types.ObjectId, ref: 'objectId'}]
})

module.exports = mongoose.model('cities',citySchema)