var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";

    var qry = { prdstatus: 'active' };
    var updvalues = { $set: { prdstatus: 'inactive' }};

    dbObject.collection(colName).updateMany(qry, updvalues, function(err, res) {
        if(err) throw err;
        console.log(res.modifiedCount + " documents updated");
        db.close();
    });
});