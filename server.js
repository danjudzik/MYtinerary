const express = require ("express");
const mongoose =require("mongoose")
const db = require('./db')
const app = express();
const bodyParser = require('body-parser')
const routerCities = require('./cityroutes')


app.use(bodyParser.json())

const cors = require("cors")
app.use(cors())


app.use(routerCities)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is ok!"))