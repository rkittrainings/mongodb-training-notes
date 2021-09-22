var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";

    var qry = { prdstatus: 'inactive' };
    var updvalues = { $set: { prdstatus: 'active' }};

    dbObject.collection(colName).updateOne(qry, updvalues, function(err, res) {
        if(err) throw err;
        console.log("1 document updated");
        db.close();
    });
});