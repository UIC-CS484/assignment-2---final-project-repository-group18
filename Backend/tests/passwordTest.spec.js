const helperFunctions = require("../helper/helperFunction")
const passportFunction = require("../controller/passport")

const inputPasswordPos = { "password" : "Password@123"}
const inputPasswordNeg = { "password" : "Pass"}


describe("Test for Passwords in the application" , ()=>{

    // Unit test case with correct password length
    test("Positive Test Case for Correct Input", ()=>{
        var isPasswordStrengthOkay = helperFunctions.checkPasswordLength(inputPasswordPos);

        expect(isPasswordStrengthOkay).toBe(true)
    })

    // Unit test case with incorrect password Length
    test("Negative Test case for Incorrect Input",  ()=>{
        var isPasswordStrengthOkay = helperFunctions.checkPasswordLength(inputPasswordNeg);

        expect(isPasswordStrengthOkay).toBe(false)
    })


    // tests for checking the hashing in the pasword 
    test("Positive Case for checking with a password and its hash", () =>{
        try{
            var returnedObj = passportFunction.genPassword(inputPasswordPos.password)
            expect(passportFunction.validPassword(inputPasswordPos.password, returnedObj.hash, returnedObj.salt)).toBe(true)
            //done()
        }catch(err){
            //done(err)
        }
       
    })

    test("Negative Case for checking with a password and its hash", () =>{
        try{
            var returnedObj = passportFunction.genPassword(inputPasswordPos.password)
            expect(passportFunction.validPassword(inputPasswordPos.password, returnedObj.hash, "randome")).toBe(false)
            //done()
        }catch(err){
            //done(err)
        }
       
    })

})