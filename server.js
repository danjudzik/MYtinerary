const express = require ("express");
const mongoose =require("mongoose")
const db = require('./db')
const app = express();
const routerCities = require('./cityroutes')


app.get("/", (req,res) => res.send("qwertyui"));
app.get("/test", (req,res) => res.send("12314"));
app.get("/cities", (req,res) => res.send("aasas"));

app.use(routerCities)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is ok!"))