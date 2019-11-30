const router = require('express').Router()
const citiesController = require('./cityController')
const cityModel = require("./cities")
const itineraryModel = require("./itinerary")
const itineraryControllers = require('./itineraryController')



router.get("/city",citiesController.getCities)
router.post("/city",citiesController.postCities)
router.get('/city/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });
router.get('/city/:city',
	(req, res) => {
  		let cityRequested = req.params.city;
  		cityModel.findOne({ city: cityRequested })
			.then(city => {
				res.send(city)
			})
			.catch(err => console.log(err));
});

router.get("/itinerary",itineraryControllers.getItineraries)

//router.get("itineraries/:idIt",itineriController.getItinerary)
module.exports = router 