<<<<<<< HEAD
const dbOperations = require("../models/cryptoUserOperations")

function getFavouritesForUser(req, res, callback){
    // Call the dboperations for the user
    // Return "" if no favourites are set
    dbOperations.getUserFavourites(req.user.userTableId, function(err, data){
        if (err != null){
            return callback(err, null)
        }
        return callback(null, data)
    })
}

function updateFavouritesForUser(req, res, callback){
    if(req.body.tickers == "" || req.body.tickers == null){
        err = "No or null tickers"
        return callback(err, null)
    }

    dbOperations.setUserFavouriteTicker(req.user.userTableId, req.body.tickers, function(err, data){
        if(err != null){
            return callback(err, null)
        }
            return callback(null, data)
        
    })

}

=======
const dbOperations = require("../models/cryptoUserOperations")

function getFavouritesForUser(req, res, callback){
    // Call the dboperations for the user
    // Return "" if no favourites are set
    dbOperations.getUserFavourites(req.user.userTableId, function(err, data){
        if (err != null){
            return callback(err, null)
        }
        return callback(null, data)
    })
}

function updateFavouritesForUser(req, res, callback){
    if(req.body.tickers == "" || req.body.tickers == null){
        err = "No or null tickers"
        return callback(err, null)
    }

    dbOperations.setUserFavouriteTicker(req.user.userTableId, req.body.tickers, function(err, data){
        if(err != null){
            return callback(err, null)
        }
            return callback(null, data)
        
    })

}

>>>>>>> b90f3457a67af0089d86bc6ccfcd878818b3f2ab
 module.exports = {getFavouritesForUser, updateFavouritesForUser}