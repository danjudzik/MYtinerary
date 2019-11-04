const router = require('express').Router()
const citiesController = require('./cityController')


router.get("/city",citiesController.getCities)




module.exports = router