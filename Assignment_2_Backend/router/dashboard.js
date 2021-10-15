const express = require('express')
var router = express.Router()
var passport = require("passport")

router.post("/", function(req, res){
    console.log(req.session)
    if (req.isAuthenticated()){
        // Console 
        console.log("The user " + req.user.user_emailId+" is authorised to visit this")
        res.send("User is authotised")
    }
    else{
        console.log("You are not authorised")
        res.send("User is not authotised")
    }
})

router.get("/", function(req, res){
    console.log(req.session)
    if (req.isAuthenticated()){
        // Console 
        console.log("The user " + req.user.user_emailId+" is authorised to visit this")
        res.send("User is authotised")
    }
    else{
        console.log("You are not authorised")
        res.send("User is not authotised")
    }
})

module.exports = router;