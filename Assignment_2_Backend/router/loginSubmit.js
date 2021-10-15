const express = require('express')
var router = express.Router()
var passport = require("passport")


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
    res.redirect("/dashboard")

})


module.exports = router;