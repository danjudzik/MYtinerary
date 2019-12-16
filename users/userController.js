const user = require("./userSchema")
const bcrypt = require('bcryptjs');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
const jwt = require("jsonwebtoken");
const key = require("../env");


const getUser = (req,res)=>{
    user
    .find({}).then((user)=>{res.json(user).status(204)})
}

const postUser = (req,res) =>{
    console.log(req.body)

      
      var hash = bcrypt.hashSync(req.body.password, salt);
          user.create({
              profilePhoto: req.body.profilePhoto,
              password: hash,
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

      const logIn = (req, res) => {
        console.log('body1111')
        console.log(req.body)
        user.findOne({username: req.body.username})
        .then((user)=> {
            console.log(user)
            if (user==null) {
                return res.status(500).send("usuario no existe"); 
            } else {
                if (bcrypt.compareSync(req.body.password, user.password)) { 
                    const payload = {
                        id: user.id,
                        username: user.username,
                        avatarPicture: user.avatarPath
                    };
                    const options = {expiresIn: 2592000};
                    jwt.sign(
                    payload,
                    key.secretOrKey,
                    options,
                    (err, token) => {
                        if(err){
                         return res.json({
                            payload:payload,
                            success: false,
                            token: "There was an error"
                        });
                        }else {
                         return res.json({
                            payload:payload,
                            success: true,
                            token: token
                        });
                        }
                    }
                    )
                } else {
                    return res.status(400).send({message: "wrong password"}); 
                }
            }      
        })
        .catch((err) => { 
        res.json(err).status(500)
        }) 
    }  
  

module.exports = {getUser,postUser,logIn}