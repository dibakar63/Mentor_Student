var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dibakar43:zLKgNVzpsRCBahsB@cluster0.qzypx5k.mongodb.net/Hall_ticket";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Mentor_Student");
  dbo.collection("student").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});