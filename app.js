var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  var dbo = db.db("konoha");
  
    var Obito = {  $set:{
        name: "Uchiha Obito",
        village: "Akatsuki",
        abilities: [
            "Katon: Gōkakyū no Jutsu", 
            "Kamui", 
            "Daisōrin", 
            "Izanagi", 
            "Kuchiyose no Jutsu", 
            "Uchihagaeshi",
            "Nunoboko no Ken", 
            "Mokuton: Sashiki no Jutsu"
        ]
    }};

    var filter = { name: "Uchiha Obito" }

    dbo.collection("village").inventory.updateOne(filter, Obito, { upsert: true} ); 

    db.close();

}); 


