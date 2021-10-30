const PASSWORDLENGTH = 8 // TODO Change the password Length from hardcoded to taken from config file


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
    // Check if email Id is in correct form
    // Trim the white space 
    emailId = emailId.trim()
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

function checkPasswordLength(data){
    if(data.password.length < PASSWORDLENGTH){
        return false
    }

    return true
}

exports.checkIfAllDetailsPresent = checkIfAllDetailsPresent
exports.checkPasswordLength = checkPasswordLength