const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
  title: String,
  profilePic: String,
  rating: Number,
  duration: Number,
  prices: Number,
  hashtag: Array
  
})

module.exports = mongoose.model('itinerary',itinerarySchema)