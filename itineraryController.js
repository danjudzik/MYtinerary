const itineraries = require("./itinerary")

const getItineraries = (req,res)=>{
    itineraries
    .find({}).then((itineraries)=>{res.json(itineraries).status(204)})
}

module.exports = {getItineraries}