// Create a express server and point things to all the routes that we ought to take 
//Initial Basic Routes 
//Login
//Logout
//CreateUser
//DeleteUser
//Update
//CatchUserFavourites
//UpdateUserFavourites
//DeleteUserFavouriteList
//Analytics Data

// Generic configuration
const PORT = 1337
const cookie_Max_Age_Time = 1000 * 60 * 10 // 10 Minutes


const express = require("express");
const app = express()
var dbOperations = require("./models/userOperations")

var loginSubmit = require("./router/loginSubmit")
var logoutRoute = require("./router/logout")
var createUser = require("./router/createUser")
var dashboard = require("./router/dashboard")
var sessionsObj = require("express-session")
var passport = require("passport")
const cors = require("cors")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())


app.use(sessionsObj({
    // TODO Change the secret and save it in the config file
    secret: "Secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: cookie_Max_Age_Time,
    }
}))

require("./controller/passport").passportInit()

app.use(passport.initialize());
app.use(passport.session());


app.use("/login", loginSubmit)
app.use("/logout", logoutRoute)
app.use("/createUser", createUser)
app.use("/dashboard", dashboard)


var server = app.listen(PORT, () => {console.log("Server started at ", PORT)})

process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
      console.log("Closing database connection")
      dbOperations.db.close()
    });
  });

