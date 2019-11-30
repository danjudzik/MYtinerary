const cities = require("./cities")


const getCities = (req,res)=>{
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


module.exports = {getCities,postCities}