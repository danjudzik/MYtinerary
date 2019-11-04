const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://danjudzik:Qwertyuiop1@danjudzik-yck9r.gcp.mongodb.net/projects?retryWrites=true&w=majority')
.catch((err)=>{console.log('Error ',err.message)});


const db = mongoose.connection;


module.exports= db;