var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";
    var qry = { prdstatus: "active" };
    
    dbObject.collection(colName).find(qry).toArray(function(err, res) {
        if(err) throw err;
        console.log(res);
        db.close();
    });
});