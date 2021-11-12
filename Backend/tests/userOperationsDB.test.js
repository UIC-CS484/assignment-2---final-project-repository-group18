// // TESTS IN PROCESS. NOT TO BE CONSIDERED FOR ASSIGNMENT 2

const dbOperations = require("../models/userOperations")

describe("Tests for user CRUD operatiosn ", ()=>{

    //  test("Test for Create Operation", ()=>{

    //     userObj = {
            
    //             "username" : "XYZ TEST",
    //             "dob" : "10-19-2000",
    //             "emailId" : "XYZ@gmail.com",
    //             "password" : "password@123" 
    //     }

    //     dbOperations.insertNewUser(userObj, function(err, data){
    //         expect(data).toBe(true)
    //     })
    // })

    test("Test for updating the details for the user", done =>{

        userObj = {
            "username" : "XYZ ABC",
            "dob" : "10-19-2000",
            "emailId" : "XYZ.U@gmail.com",
            "password" : "password@123" 
        }

        try{
            dbOperations.insertNewUser(userObj, function(err, data){
                //console.log(data)
                expect(data).toBe(true)
    
                userObj = {
                    "username" : "XYZ TEST123",
                    "dob" : "10-19-2000",
                    "emailId" : "XYZ.U@gmail.com"
                }
                
                try{
                    dbOperations.updateUserDetails(userObj, "userDetails", function(err, data){
                        expect(data).toBe(true)
                        dbOperations.getUserData(userObj.emailId, function(err, data){
                            //console.log(data)
                            expect(data.username).toBe(userObj.username)
                            done()
                        })
                    })
                }catch(err){
                    done(err)
                }
                
            })
    
        }
        catch(err){
            done(err)
        }
        
        
    })


})
