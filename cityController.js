const cities = require("./cities")


const getCities = (req,res)=>{
    console.log("llegue")
    cities
    .find({}).then((cities)=>{res.json(cities).status(204)})
}


const postCities = (req,res) =>{
    console.log(req.body)
    cities.create({
        city: req.body.city,
        country: req.body.country
    }).then(postCities=>{
        res.json(postCities).status(200)
    }).catch(err =>{
        res.json(err).status(204)
    })
}

const getItinerary = (req,res)=>{

    cities
    .find({}).populate('objectId').then((cities)=>{res.json(cities).status(204)})
}

module.exports = {getCities,postCities,getItinerary}