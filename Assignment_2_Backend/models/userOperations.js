const sqlite3 = require('sqlite3').verbose();
const passport = require('../controller/passport')


let db = new sqlite3.Database("./database/sampleDb.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the database');
});

// Create a user given the inputs
function insertNewUser(userObj, callback){

// get the hash of the password
passwordSalt = passport.genPassword(userObj.password)

db.get("Select MAX(userTableId) as usertableId from userDetails", [], function(err, row){
    if (err != null){
        callback(err, null)
    }else{
        maxUserTableId = row.usertableId + 1 
        sqlInsertData = "Insert Into userDetails(username, userTableId, user_emailId, password, salt, dob) "
        sqlInsertData += "Values(?, ?, ?, ?, ?, ?)"

        queryData = [userObj.username,  maxUserTableId, userObj.emailId, passwordSalt.hash, passwordSalt.salt, userObj.dob]
        console.log(queryData)


        db.run(sqlInsertData, queryData, function(err){
            if (err != null){
                callback(err, null)
            }

            console.log("Added User with Email Id"+ userObj.emailId)
            return callback(null, true)
        })

    }
})



}

// Check if user Id exists
function checkUserId(emailId, callback){
    sqlCheckUserId = "Select * from userDetails where user_emailId = ?"
    queryData = [emailId]

    db.get(sqlCheckUserId, queryData, (err, row) => {
        if (err){
            console.log(err);
            return callback(err, null)
        }

        if (row != null){
            return callback(null, false);
        }else{
            return callback(null, true);
        }
    })
}

// Get the data of the user 

function findUser(emailId, callbackfn){
    //console.log(userId)
    sqlGetDataFromUser = "Select userTableId, user_emailId, password, salt from userDetails where user_emailId = ?"
    queryData = [emailId];

    db.get(sqlGetDataFromUser, queryData, (err, row) => {
        if (err){
            //console.log(err);
            //throw err;
            return callbackfn(err, null);
        }
        return callbackfn(err, row);
    })

}

function findUserByUserTableId(userTableId, callbackfn){
    //console.log(userId)
    sqlGetDataFromUser = "Select userTableId, user_emailId, password, salt from userDetails where userTableId = ?"
    queryData = [userTableId];

    db.get(sqlGetDataFromUser, queryData, (err, row) => {
        if (err){
            //console.log(err);
            //throw err;
            return callbackfn(err, null);
        }
        return callbackfn(err, row);
    })

}



// Update details of the user
function updateUserDetails(userObj, callbackfn){
    sqlUpdateData = "Update userDetails"
    sqlInsertData += "Set username = ? "
    sqlInsertData += "Set user_emailId = ? "
    sqlInsertData += "Set dob = ? "

    queryData = [userObj.username, userObj.emailId, userObj.dob]

    db.run(sqlUpdateData, queryData, function(err){
        if (err != null){
            callbackfn(err, null)
        }
        if (this.changes >= 0){
            callbackfn(null, true)
        }
    })
}


// Function to change password
// TO DO



exports.findUser = findUser
exports.checkUserId =checkUserId
exports.insertNewUser = insertNewUser
exports.updateUserDetails = updateUserDetails
exports.findUserByUserTableId = findUserByUserTableId
exports.db = db