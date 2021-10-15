
function checkIfAllDetailsPresent(req, callback){
    // if (req.body.userId == null || req.body.userId == ''){
    //     err = "UserId is empty "
    //     callback(err, null)
    // }
    //userId = req.body.userId
    if (req.body.emailId == null || req.body.emailId == ''){
        err = "Email ID is empty "
        callback(err, null)   
    }
    emailId = req.body.emailId
    if (req.body.username == null || req.body.username == ''){
        err = "User Name is empty"
        callback(err, null)
    }
    username = req.body.username
    if (req.body.password == null || req.body.password == ''){
        err = "Password is empty"
        callback(err, null)
    }
    password = req.body.password

    
    if(req.body.dob == null || req.body.dob == ''){
        err = "Dob is empty"
        callback(err, null)
    }
    dob = req.body.dob


    dataObj = {
        // userId : userId,
        emailId : emailId,
        username : username,
        password : password,
        dob : dob 
    }
    callback(null, dataObj)
}

exports.checkIfAllDetailsPresent = checkIfAllDetailsPresent