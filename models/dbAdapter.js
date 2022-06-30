const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017"; // Create a new MongoClient
const client = new MongoClient(uri);

async function getSneackers(){  
    var client = new MongoClient(uri, {useUnifiedTopology: true});
    await client.connect();
    const db = client.db("SHOES");
    let collection = db.collection('MYSHOES');
    let res = await collection.find({}).toArray();
    return res;
  }
  

  exports.getSneackers = getSneackers;
