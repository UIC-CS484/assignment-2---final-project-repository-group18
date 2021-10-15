const express = require("express")
const router = express.Router()
var userController = require("../controller/userController")

router.post("/", function(req, res){
    // Create user 
    // Call controller of the method
    userController.createUser(req, res, function(err, data){
        if (err != null){
            console.log(err)
            res.send(err)
        }
        if (data != null){
            res.send(data)
        }
       //res.send("Some problem")
    })
})


module.exports = router;