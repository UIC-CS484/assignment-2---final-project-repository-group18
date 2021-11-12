const db = require("../models/sqlconnection").db


function setComment(dataObj, callbackfn){
    // Always insert a new Comment
    db.get("PRAGMA foreign_keys = ON")
    sqlInsertComment = " INSERT INTO NewsItems(news_cryptoId, news_URL, news_Data, news_emailID, news_Timestamp)"
    sqlInsertComment += " VALUES(?, ?, ?, ?, ?)"

    sqlParams = [dataObj.ticker, dataObj.newsURL, dataObj.commentData, dataObj.emailId, dataObj.timeStamp]

    db.run(sqlInsertComment, sqlParams, function(err){
        if(err != null){
            //console.log(err)
            return callbackfn(err, null)
        }
        return callbackfn(null, true)
    })
}

function getComments(newsURL, callbackfn){
    sqlGetComments = "Select news_Data from NewsItems where news_URL = ?"
    sqlParams = [newsURL]

    db.all(sqlGetComments, sqlParams, function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }
        return callbackfn(null, data)
    })

}

function addLikes(newsURL, numOFlikes, callbackfn){
    db.get("PRAGMA foreign_keys = ON")
    sqlCheckIfLikesPresnt = "Select likes from NewsLikes where newsURL = ?"
    sqlParams = [newsURL]

    db.get(sqlCheckIfLikesPresnt, sqlParams, function(err, data){
        if (err != null){
            callbackfn(err, null)
        }
        
        if (data != null){
            sqlUpdateLikesForNews = "Update NewsLikes "
            sqlUpdateLikesForNews += " set likes = ?"
            sqlUpdateLikesForNews += " where newsURL = ?"
            sqlParams = [data.likes + numOFlikes, newsURL]

            db.run(sqlUpdateLikesForNews, sqlParams, function(err){
                if(err != null){
                    return callbackfn(err, null)
                }
                return callbackfn(null, true)
            })
            
        }
        else{
            sqlInsertLikesForNews = " INSERT INTO NewsLikes(newsURL, likes)"
            sqlInsertLikesForNews += " VALUES(?, ?)"
            sqlParams = [newsURL, numOFlikes]

            db.run(sqlInsertLikesForNews, sqlParams, function(err){
                if(err != null){
                    return callbackfn(err, null)
                }
                return callbackfn(null, true)
            })
        }
    })
}

function getLikesForNews(newsURL, callbackfn){
    sqlGetLikesForNews = "Select likes from NewsLikes where newsURL = ?"
    sqlParams = [newsURL]

    db.get(sqlGetLikesForNews, sqlParams, function(err, data){
        if(err != null){
            callbackfn(err, null)
        }
        callbackfn(null, data)

    })
}

module.exports = {setComment, getComments, addLikes, getLikesForNews}