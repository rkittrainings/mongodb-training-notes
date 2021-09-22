var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/shopin";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;
    console.log("database created successfully!");
    db.close();
});