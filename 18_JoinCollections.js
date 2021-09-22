var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    dbObject.collection("orders").aggregate([
        {$lookup: {
            from: "products", 
            localField: "product_id", 
            foreignField: "_id", 
            as: "ordered_details"
        }}
    ]).toArray(function(err, res) {
        if(err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});