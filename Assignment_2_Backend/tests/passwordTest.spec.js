const helperFunctions = require("../helper/helperFunction")

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

})