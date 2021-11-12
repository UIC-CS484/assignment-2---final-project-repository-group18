<<<<<<< HEAD
const db = require("../models/sqlconnection").db

function getDBCryptoList(callbackfn){

    sqlGetCrytpData = "Select ticker, cryptoName from CryptoCurrencies"

    db.all(sqlGetCrytpData,[], function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }
        //console.log(data)
        return callbackfn(null, data)
    })

}

function getCryptoByName(ticker, callbackfn){
    sqlGetCrytpDataByName = "Select ticker, cryptoName from CryptoCurrencies where ticker=?"
    sqlParams = [ticker]

    db.get(sqlGetCrytpDataByName, sqlParams, function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }

        return callbackfn(null, data)
    })
}

module.exports = {getDBCryptoList, getCryptoByName}
//exports.getDBCryptoList = getDBCryptoList
=======
const db = require("../models/sqlconnection").db

function getDBCryptoList(callbackfn){

    sqlGetCrytpData = "Select ticker, cryptoName from CryptoCurrencies"

    db.all(sqlGetCrytpData,[], function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }
        //console.log(data)
        return callbackfn(null, data)
    })

}

function getCryptoByName(ticker, callbackfn){
    sqlGetCrytpDataByName = "Select ticker, cryptoName from CryptoCurrencies where ticker=?"
    sqlParams = [ticker]

    db.get(sqlGetCrytpDataByName, sqlParams, function(err, data){
        if(err != null){
            return callbackfn(err, null)
        }

        return callbackfn(null, data)
    })
}

module.exports = {getDBCryptoList, getCryptoByName}
//exports.getDBCryptoList = getDBCryptoList
>>>>>>> b90f3457a67af0089d86bc6ccfcd878818b3f2ab
//exports.getCryptoByName = getCryptoByName