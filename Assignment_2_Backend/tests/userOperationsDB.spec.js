// TESTS IN PROCESS. NOT TO BE CONSIDERED FOR ASSIGNMENT 2

dbOperations = require("../models/userOperations")

describe("Tests for user CRUD operatiosn ", ()=>{

    test("Test for Create Operation", ()=>{

        userObj = {
            
                "username" : "Tejas ee",
                "dob" : "10-19-2000",
                "emailId" : "tejas22@gmail.com",
                "password" : "password@123" 
        }

        dbOperations.insertNewUser(userObj, function(err, data){
            expect(data).toBe(true)
        })
    })


})