const { request } = require('express');
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);


async function getmen(){  // show mens sneakers
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("sneakers");
  let collection = db.collection('men');
  let res = await collection.find({}).toArray();
  client.close();
  return res;
}

exports.getmen = getmen;

async function getwoman(){  //show woman's sneakers
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("sneakers");
  let collection = db.collection('women');
  let res = await collection.find({}).toArray();
  client.close();
  return res;
}

exports.getwoman = getwoman;

async function getkids(){  //show kids sneakers
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("sneakers");
  let collection = db.collection('kids');
  let res = await collection.find({}).toArray();
  client.close();
  return res;
}

exports.getkids = getkids;

async function getOrderDetails(){  //show my cart 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("sneakers");
  let collection = db.collection('orderDetails');
  let res = await collection.find({}).toArray();
  client.close();
  return res;
}
exports.getOrderDetails=getOrderDetails;


async function saveNewOrder(details){   //add products to cart
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("orderDetails");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveNewOrder = saveNewOrder;

async function saveClient(details){  // save new customers
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("users");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveClient = saveClient;


async function deleteOrder(){  //delete cart after purchase 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("sneakers");
  var myquary= {name: /^i/}
  let collection = db.collection('orderDetails');
  let res = await collection.deleteMany(myquary);
  client.close();
  return res;
}
exports.deleteOrder=deleteOrder;

async function saveorder(details){  //save new order
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("orders");
  var result = await col.insertOne(details);
  client.close();
  return result;
}

exports.saveorder=saveorder;

async function GetOpenOrders(){  // find open orders
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var dbo = client.db("sneakers");
  var query = { status: "open" };
  let collection= dbo.collection('orders');
  let res=await collection.find(query).toArray() 
  client.close();
  return res;
};
exports.GetOpenOrders = GetOpenOrders;