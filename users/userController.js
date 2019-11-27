const user = require("./userSchema")

const postUser = (req,res) =>{
    console.log(req.body)
    user.create({
        profilePhoto: req.body.profilePhoto,
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        country: req.body.country
    }).then(postUser=>{
        res.json(postUser).status(200)
    }).catch(err =>{
        res.json(err).status(204)
    })
}

module.exports = {postUser}