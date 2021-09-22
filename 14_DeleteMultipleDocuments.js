var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";
    var qry = { prdname: /a/ };

    dbObject.collection(colName).deleteMany(qry, function(err, obj) {
        if(err) throw err;
        console.log(obj.deletedCount + " documents deleted!");
        db.close();
    });
});