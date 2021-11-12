<<<<<<< HEAD
const db = require("../models/sqlconnection").db


function setComment(dataObj, callbackfn){
    // Always insert a new Comment
    db.get("PRAGMA foreign_keys = ON")
    sqlInsertComment = " INSERT INTO Comments(comments_userTableId, comments_TimeStamp, comments_data, comments_crypto, comments_newsURL)"
    sqlInsertComment += " VALUES(?, ?, ?, ?, ?)"

    sqlParams = [dataObj.userTableId, dataObj.timeStamp, dataObj.commentData, dataObj.ticker, dataObj.newsURL]

    db.run(sqlInsertComment, sqlParams, function(err){
        if(err != null){
            //console.log(err)
            return callbackfn(err, null)
        }
        return callbackfn(null, true)
    })
}

function getComments(newsURL, callbackfn){
    sqlGetComments = "Select * from Comments where comments_newsURL = ?"
    sqlParams = [newsURL]

    db.all(sqlGetComments, sqlParams, function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }
        return callbackfn(null, data)
    })

}

function addLikes(newsURL, userTableId, callbackfn){
    db.get("PRAGMA foreign_keys = ON")
    sqlCheckIfLikesPresnt = "Select COUNT(*) as count from NewsLikes where newsLikes_userTableId = ?"
    sqlParams = [userTableId]
   
    db.get(sqlCheckIfLikesPresnt, sqlParams, function(err, data){
        if (err != null){
            return callbackfn(err, null)
        }
        
        if (data.count == 0){
            sqlInsertLikesData = "INSERT INTO NewsLikes(newsURL, newsLikes_userTableId)"
            sqlInsertLikesData  += "VALUES(?,?)"

            sqlParams = [newsURL, userTableId]

            db.run(sqlInsertLikesData, sqlParams, function(err){
                if(err != null){
                    return callbackfn(err, null)
                }

                return callbackfn(null, true)
            })
        }
        else{
            return callbackfn(null, false)
        }
    })

    // db.get("PRAGMA foreign_keys = ON")
    // sqlCheckIfLikesPresnt = "Select newsLikes_userTableId from NewsLikes where newsURL = ?"
    // sqlParams = [newsURL]

    // db.get(sqlCheckIfLikesPresnt, sqlParams, function(err, data){
    //     if (err != null){
    //         callbackfn(err, null)
    //     }
        
    //     if (data != null){
    //         sqlUpdateLikesForNews = "Update NewsLikes "
    //         sqlUpdateLikesForNews += " set likes = ?"
    //         sqlUpdateLikesForNews += " where newsURL = ?"
    //         sqlParams = [data.likes + numOFlikes, newsURL]

    //         db.run(sqlUpdateLikesForNews, sqlParams, function(err){
    //             if(err != null){
    //                 return callbackfn(err, null)
    //             }
    //             return callbackfn(null, true)
    //         })
            
    //     }
    //     else{
    //         sqlInsertLikesForNews = " INSERT INTO NewsLikes(newsURL, likes)"
    //         sqlInsertLikesForNews += " VALUES(?, ?)"
    //         sqlParams = [newsURL, numOFlikes]

    //         db.run(sqlInsertLikesForNews, sqlParams, function(err){
    //             if(err != null){
    //                 return callbackfn(err, null)
    //             }
    //             return callbackfn(null, true)
    //         })
    //     }
    // })
}

function getLikesForNews(newsURL, callbackfn){
    sqlGetLikesForNews = "Select COUNT(*) as count from NewsLikes where newsURL = ?"
    sqlParams = [newsURL]

    db.get(sqlGetLikesForNews, sqlParams, function(err, data){
        if(err != null){
            callbackfn(err, null)
        }
        // Check if the data is empty 
        
        callbackfn(null, data)

    })
}

=======
const db = require("../models/sqlconnection").db


function setComment(dataObj, callbackfn){
    // Always insert a new Comment
    db.get("PRAGMA foreign_keys = ON")
    sqlInsertComment = " INSERT INTO Comments(comments_userTableId, comments_TimeStamp, comments_data, comments_crypto, comments_newsURL)"
    sqlInsertComment += " VALUES(?, ?, ?, ?, ?)"

    sqlParams = [dataObj.userTableId, dataObj.timeStamp, dataObj.commentData, dataObj.ticker, dataObj.newsURL]

    db.run(sqlInsertComment, sqlParams, function(err){
        if(err != null){
            //console.log(err)
            return callbackfn(err, null)
        }
        return callbackfn(null, true)
    })
}

function getComments(newsURL, callbackfn){
    sqlGetComments = "Select * from Comments where comments_newsURL = ?"
    sqlParams = [newsURL]

    db.all(sqlGetComments, sqlParams, function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }
        return callbackfn(null, data)
    })

}

function addLikes(newsURL, userTableId, callbackfn){
    db.get("PRAGMA foreign_keys = ON")
    sqlCheckIfLikesPresnt = "Select COUNT(*) as count from NewsLikes where newsLikes_userTableId = ?"
    sqlParams = [userTableId]
   
    db.get(sqlCheckIfLikesPresnt, sqlParams, function(err, data){
        if (err != null){
            return callbackfn(err, null)
        }
        
        if (data.count == 0){
            sqlInsertLikesData = "INSERT INTO NewsLikes(newsURL, newsLikes_userTableId)"
            sqlInsertLikesData  += "VALUES(?,?)"

            sqlParams = [newsURL, userTableId]

            db.run(sqlInsertLikesData, sqlParams, function(err){
                if(err != null){
                    return callbackfn(err, null)
                }

                return callbackfn(null, true)
            })
        }
        else{
            return callbackfn(null, false)
        }
    })

    // db.get("PRAGMA foreign_keys = ON")
    // sqlCheckIfLikesPresnt = "Select newsLikes_userTableId from NewsLikes where newsURL = ?"
    // sqlParams = [newsURL]

    // db.get(sqlCheckIfLikesPresnt, sqlParams, function(err, data){
    //     if (err != null){
    //         callbackfn(err, null)
    //     }
        
    //     if (data != null){
    //         sqlUpdateLikesForNews = "Update NewsLikes "
    //         sqlUpdateLikesForNews += " set likes = ?"
    //         sqlUpdateLikesForNews += " where newsURL = ?"
    //         sqlParams = [data.likes + numOFlikes, newsURL]

    //         db.run(sqlUpdateLikesForNews, sqlParams, function(err){
    //             if(err != null){
    //                 return callbackfn(err, null)
    //             }
    //             return callbackfn(null, true)
    //         })
            
    //     }
    //     else{
    //         sqlInsertLikesForNews = " INSERT INTO NewsLikes(newsURL, likes)"
    //         sqlInsertLikesForNews += " VALUES(?, ?)"
    //         sqlParams = [newsURL, numOFlikes]

    //         db.run(sqlInsertLikesForNews, sqlParams, function(err){
    //             if(err != null){
    //                 return callbackfn(err, null)
    //             }
    //             return callbackfn(null, true)
    //         })
    //     }
    // })
}

function getLikesForNews(newsURL, callbackfn){
    sqlGetLikesForNews = "Select COUNT(*) as count from NewsLikes where newsURL = ?"
    sqlParams = [newsURL]

    db.get(sqlGetLikesForNews, sqlParams, function(err, data){
        if(err != null){
            callbackfn(err, null)
        }
        // Check if the data is empty 
        
        callbackfn(null, data)

    })
}

>>>>>>> b90f3457a67af0089d86bc6ccfcd878818b3f2ab
module.exports = {setComment, getComments, addLikes, getLikesForNews}