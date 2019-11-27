const router = require('express').Router()
const userController = require('./userController')



router.post("/user",userController.postUser)