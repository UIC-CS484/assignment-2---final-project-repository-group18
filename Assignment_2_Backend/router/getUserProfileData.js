<<<<<<< HEAD
const express = require('express')
var router = express.Router()
var userController = require("../controller/userController")

router.post("/", function(req, res, next){

    if(req.isAuthenticated()){
        userController.getUserProfileData(req, res, function(err, data){
            if(err){

                res.json({"message" : err}   )
            }
            msg = {"message" : data}    
            res.json(msg)

        })
    }else{
        msg = {"message" : "User not authorised"}
        res.json(msg)
    }

})

=======
const express = require('express')
var router = express.Router()
var userController = require("../controller/userController")

router.post("/", function(req, res, next){

    if(req.isAuthenticated()){
        userController.getUserProfileData(req, res, function(err, data){
            if(err){

                res.json({"message" : err}   )
            }
            msg = {"message" : data}    
            res.json(msg)

        })
    }else{
        msg = {"message" : "User not authorised"}
        res.json(msg)
    }

})

>>>>>>> b90f3457a67af0089d86bc6ccfcd878818b3f2ab
module.exports = router;