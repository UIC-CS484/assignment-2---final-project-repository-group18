<<<<<<< HEAD
// // TESTS IN PROCESS. NOT TO BE CONSIDERED FOR ASSIGNMENT 2

// dbOperations = require("../models/userOperations")

// describe("Tests for user CRUD operatiosn ", ()=>{

//     test("Test for Create Operation", ()=>{

//         userObj = {
            
//                 "username" : "Tejas ee",
//                 "dob" : "10-19-2000",
//                 "emailId" : "tejas22@gmail.com",
//                 "password" : "password@123" 
//         }

//         dbOperations.insertNewUser(userObj, function(err, data){
//             expect(data).toBe(true)
//         })
//     })


// })
=======
// TESTS IN PROCESS. NOT TO BE CONSIDERED FOR ASSIGNMENT 2

const userController = require("../controller/userController")

describe("Tests for user CRUD operatiosn ", ()=>{

    test("Create a user and check the reponse", function(){
        userCreationObj = {
                "emailId": "test12@test.com",
                "password": "password@123",
                "username":"T r",
                "dob" : "12/10/1921"
        }
    })

})
>>>>>>> 54f7790861704bde9231917200c31d853c886ca6
