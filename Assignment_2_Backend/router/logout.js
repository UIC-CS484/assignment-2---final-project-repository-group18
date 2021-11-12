<<<<<<< HEAD
const express = require('express')
var router = express.Router()

router.post("/", function(req, res){
    // console.log("Before the logout operation")
    // console.log(req.session)
    // console.log(req.user)
    req.logOut()
    // console.log("After the logout operation")
    // console.log(req.session)
    // console.log(req.user)
    res.json({"message" : "Successfully logged out"})
    
})

=======
const express = require('express')
var router = express.Router()

router.post("/", function(req, res){
    // console.log("Before the logout operation")
    // console.log(req.session)
    // console.log(req.user)
    req.logOut()
    // console.log("After the logout operation")
    // console.log(req.session)
    // console.log(req.user)
    res.json({"message" : "Successfully logged out"})
    
})

>>>>>>> b90f3457a67af0089d86bc6ccfcd878818b3f2ab
module.exports = router;