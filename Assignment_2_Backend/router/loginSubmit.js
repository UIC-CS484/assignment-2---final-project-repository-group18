const express = require('express')
var router = express.Router()
var passport = require("passport")
var userController = require("../controller/userController")


router.use((req, res, next)=>{
    // console.log(req.sessionID)
    // console.log(req.session)
    next();
})

//Once login credentials are submitted use this route to valid if the user is authentic
router.post('/',  passport.authenticate("local"), function(req, res, next) {

    // Now that the user is logged in fetch the users favourite list 
    // Send it to the react JS end
    //console.log("Authenticated")
    //res.send("Authenticated");
    //res.redirect("/dashboard")
    userController.getUserInfo(req, res, function(err, data){
        if (err != null){
            res.send(err)
        }
        res.json(data)
    })

})


module.exports = router;