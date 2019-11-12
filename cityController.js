const city = require("./cities")

const getCities = (req,res)=>{
    console.log("llegue")
    city
    .find({}).then((cities)=>{res.json(cities).status(204)})
}

module.exports = {getCities}