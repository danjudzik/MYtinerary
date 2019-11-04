const city = require("./cities")

const getCities = (req,res)=>{
    city
    .find({}).then((cities)=>{res.json(cities).status(204)})
}

module.exports = {getCities}