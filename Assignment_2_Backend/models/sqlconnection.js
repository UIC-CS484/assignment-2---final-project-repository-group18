// Take config's from some config file and create a connection to the SQL server
// Export the connection object
const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
    "./database/sampleDb.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Connected to the database");
    }
);

exports.db = db
