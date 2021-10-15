// For handling every request and doing validations , etc
var dbOperations = require("../models/userOperations")
var helper = require("../helper/helperFunction")

module.exports = {
    // Start of login Submit Event
    // ********* This is currently not in use **********
    loginSubmitEvent : (req, res, callback)=>{
        userName = req.body.username
        password = req.body.password
        // console.log(userName)
        // console.log(password)
        // TODO Do a regex check to see if username and password are only alphanumeric ( For SQL injection)
        
        // TODO Call the functions in passport js to get the crypto hash of password

        // Call the db get user operations and authenticate
        dbOperations.findUser(userName, function(err, data){
            if (data != null){
                return callback(null, data)
            }else if (err != null){
                return callback(err, null)
            }
        })
       // console.log(data)
       

    },
    // End of login submit event

    // Start of create user Function
    createUser : (req, res, callback) => {
        helper.checkIfAllDetailsPresent(req, function(err, dataObj){
            if(err != null){
                callback(err, null)
            }
            dbOperations.checkUserId(dataObj.emailId, function(err, data){
                if (err != null){
                    return callback(err, null)
                }
                if (data != null){
                    if (data == false){
                        //console.log("User Id is not unique")
                        return callback(null, "User Email Id Already Exists")
                    }else if(data == true){
                       // Check for the password policy 
                       // Then call the db function to insert the user credentials
                       dbOperations.insertNewUser(dataObj, function(err, data){
                           if (err != null){
                               return callback(err, null)
                           }
                           if (data != null){
                               if (data == true){
                                   return callback(null, true)
                               }
                           }
                       })
                    }
                }
            })
        })
       

    },
    // End of Create User Function 

    // Start of Update user Details 
    updateUser : (req, res, callback)=>{
        // Find out if the user Exists 
        // Check if all fields are present so that u accidentally don't do any thing useless
        
        // Adding this step as in update user route , Password won't be transfered
        if (req.body.password == null || req.body.password == ''){
            req.body.password = "dummy"
        }

        helper.checkIfAllDetailsPresent(req, function(err, dataObj){
            if (err != null){
                callback(err, null)
            }
            dbOperations.checkUserId(dataObj.emailId, function(err, data){
                if (err != null){
                    callback(err, null)
                }
                if (data != null){
                    if (data == false){
                        
                        dbOperations.updateUserDetails(dataObj, function(err, isSuccess){
                            if(err != null){
                                callback(err, null);
                            }
                            if (isSuccess){
                                console.log("User Data successfully changed");
                                callback(null, isSuccess)
                            }
                        })
                    }else if(data == true){
                        return callback(null, "User Id is not correct")
                    }
                }        
            })
        })

    },
    // End of update user function

    deleteUser : (req, res, callback)=>{
        // Get the user ID and delete the user from the database 
    }


};