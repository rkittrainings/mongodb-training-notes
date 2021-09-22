var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";
    var qry = { prdname: 'table' };

    dbObject.collection(colName).deleteOne(qry, function(err, obj) {
        if(err) throw err;
        console.log("1 document deleted!");
        db.close();
    });
});