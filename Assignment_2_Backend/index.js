// Create a express server and point things to all the routes that we ought to take
//Initial Basic Routes
///// User Action Related
//Login
//Logout
//CreateUser
//DeleteUser
//GetUserData
//UpdateUserData
////// Application Specific
/// cryptoUserConfigController
//SetFavourites
//GetFavourites
/// cryptoUserCommentLikeController
//SetCommentsForNewsURL
//GetCommentsForNewsURL
//AddLiketoNewsURL
/// staticDataController
//SendListOfAllCryptos
//getCryptoDetailsByName

/// News Population Controller
//GetNewsForCryptoTickers

// Generic configuration
const PORT = 1337;
const cookie_Max_Age_Time = 1000 * 60 * 10; // 10 Minutes
const MINPASSWORDLENGTH = 8;

const express = require("express");
const sessionsObj = require("express-session");
const passport = require("passport");
const app = express();
const cors = require("cors");
var sessionStore = require("connect-sqlite3")(sessionsObj)
//const conn = 
// user Defined
const dbObject = require("./models/sqlconnection");

// User Details Specific imports
const loginSubmit = require("./router/loginSubmit");
const logoutRoute = require("./router/logout");
const createUser = require("./router/createUser");
const dashboard = require("./router/dashboard");
const updateUser = require("./router/updateUser");
const deleteUser = require("./router/deleteUser");
const getUserProfileData = require("./router/getUserProfileData");

// Applications specific 
const cryptoUserDetails = require("./router/cryptoFavourites")
const crytoDataDetails = require("./router/getCryptoList")
const userCommentLike = require("./router/commentLike")


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors())

app.use(
  cors({
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: ["http://localhost:3000"],
  })
); // Development

// TO DO
// access-control-allow-credentials set to true

app.use(
  sessionsObj({
    // TODO Change the secret and save it in the config file
    secret: "Secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: cookie_Max_Age_Time,
    },
    store : new sessionStore({db : "sessions.db", dir : "./database"})
  })
);

require("./controller/passport").passportInit();

app.use(passport.initialize());
app.use(passport.session());

app.use("/login", loginSubmit);
app.use("/logout", logoutRoute);
app.use("/createUser", createUser);
app.use("/dashboard", dashboard);
app.use("/updateUser", updateUser);
app.use("/deleteUser", deleteUser);
app.use("/getUserProfileData", getUserProfileData);

//Application specific routes
app.use("/cryptoUserDetails", cryptoUserDetails);
app.use("/cryptoDataDetails", crytoDataDetails);
app.use("/userCommentLike", userCommentLike)

var server = app.listen(PORT, () => {
  console.log("Server started at ", PORT);
});

process.on("SIGINT", () => {
  console.info("SIGINT signal received.");
  console.log("Closing http server.");
  server.close(() => {
    console.log("Http server closed.");
    console.log("Closing database connection");
    dbObject.db.close();
  });
});

exports.MINPASSWORDLENGTH = MINPASSWORDLENGTH;
