var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";

    var insDoc = { prdname: 'hp', prdprice: '$250.00', prdstatus: 'active' };
    dbObject.collection(colName).insertOne(insDoc, function(err, res) {
        if(err) throw err;
        console.log("1 document inserted successfully!");
        db.close();
    });
});