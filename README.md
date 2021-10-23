# CryptoBase

## Assignment 2

## Team 

Akshat Wagadre, Olatungi Busari, Tejas Rajopadhye

## Starting the Backend Server 

```
$ cd Assignment_2_Backend
$ npm i
$ npm start

```

## Starting the frontend Server

```
$ cd Assignment_2_Frontend

```


## Guide to accessing web application

1. Goto http://localhost:3000/
2. Click on 'SignUp' and create the user by entering appropriate details
3. Once the user is created, you will be redirected to login page.
4. Now with those credentials, login into the website

## Unit testing with JEST and plan ahead

For this assignment , two unit tests are created in 'passwordTest.spec.js' file located inside the 'tests' folder. Run the test cases by first navigating inside the "Assignment_2_Backend" folder and running the below test

```
 
$ npm run test

```

1. Normal Usage - This tests verifies if the passwordlength is permissible when a password with  permissible length is provided. For this application password with length > 8 are considered permissible. This test is named as "Positive Test Case for Correct Input"

2. Erroneuos Usage - This test verifies the functionality of password lenght checker in case the password lenght is < 8 . This test is named as "Negative Test case for Incorrect Input" . Here password with length = 4 is passed and checked if the function returns 'false' which indicates the correctness of this test

These two test cases cover the complete set of functionalities for "checkPasswordLength" function (defined inside " ./helper/helperFunctions.js ") 

### Plan Ahead

Going ahead we expect to check and perform unit testing for 
1. Checking the Users Detail Inputs 
2. Checking the password hashing functionality
3. Checking functions related to database operations 
4. Checking the functions related to passport.js (e.g. authentication when cookie/session expires)

For each testing , we will cover the test cases for , correct input , erronoues , any edge case input and validate the same in our test cases 

## Structure of project 

The project is divided into 3 parts,
1. Frontend - in the folder Assignment_2_Frontend
2. Backend - in the folder Assignment_2_Backend
3. Database - in the folder Assignment_2_Database

Frontend is made in React JS and backend in NodeJS ( with Express.js ) .Both frontend and backend server need to be started. Before starting both frontend and backend servers please install the appropriate dependencies. 

Dependencies for Backend - NodeJS , npm and packages inside the package.json file
Dependencies for Frontend - ...

Tools and IDEs - Visual Studio Code, Postman, SQLiteStudio 


## Storage of User Details

Whenever a new user is created, its details (username, emailID, date of birth, password) is stored in the SQLite based database which is located in "Assignment_2_Backend/database/sampleDb.db". Passwords are hashed with a salt and the hash along with the salt is stored in the database. 

Other tables in the database are not yet used and are provided to show the scope of the project

The database can be accessed from the CLI provided by SQLite or with a user friendly software called SQLite Studio 








