const express = require ("express");
const mongoose =require("mongoose")
const db = require('./db')
const app = express();


app.get("/", (req,res) => res.send("qwertyui"));
app.get("/test", (req,res) => res.send("biennn"));


const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server is ok!"))