var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "orders";

    var insDoc = [
        { _id: 1, product_id: 154, status: 'active' }
    ];
    dbObject.collection(colName).insertMany(insDoc, function(err, res) {
        if(err) throw err;
        console.log(" the no of " + res.insertedCount + " document inserted successfully!");
        db.close();
    });
});