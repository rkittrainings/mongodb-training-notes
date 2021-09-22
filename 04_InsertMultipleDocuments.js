var MongoClient = require("mongodb").MongoClient;
var dbUrl = "mongodb://localhost:27017/";

MongoClient.connect(dbUrl, function(err, db) {
    if(err) throw err;

    var dbObject = db.db("shopin");
    var colName = "products";

    var insDoc = [ 
        { prdname: 'dell', prdprice: '$520.00', prdstatus: 'inactive' }, 
        { prdname: 'lenovo', prdprice: '$220.00', prdstatus: 'active' }, 
        { prdname: 'acer', prdprice: '$304.00', prdstatus: 'inactive' }
    ];
    dbObject.collection(colName).insertMany(insDoc, function(err, res) {
        if(err) throw err;
        console.log(" the no of " + res.insertedCount + " document inserted successfully!");
        db.close();
    });
});