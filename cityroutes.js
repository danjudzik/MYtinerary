const router = require('express').Router()
const citiesController = require('./cityController')
const cityModel = require("./cities")
const itineraryModel = require("./itinerary")
const itineraryControllers = require('./itineraryController')

const userController = require('./users/userController')
const jwt = require("jsonwebtoken")
const key = require("./env")
const passport = require('passport');

function authenticateJwt(req, res, next) {
    passport.authenticate('jwt', function(err, user, info) {
      if (err) return next(err);
      if (!user) res.redirect("http://google.com.ar/");
      req.user = user;
      next();
    })(req, res, next);
  }


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

router.get("/user",authenticateJwt ,userController.getUser)
router.post("/user",userController.postUser)
router.post("/user/login", userController.logIn); 
router.get("/itineraries", itineraryControllers.getItineraries);
module.exports = router 