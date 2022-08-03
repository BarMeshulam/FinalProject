const { request } = require('express');
var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);

async function loginUser(details){ // Verify login 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var query = { Email: String(details.Email), password: String (details.password) };
  var col = client.db("sneakers").collection("users");
  var result = await col.findOne(query);
  client.close();
  console.log(result)
  return result;
}
exports.loginUser=loginUser;

async function saveClient(details){  // save new customers
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("users");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveClient = saveClient;

async function saveManager(details){  // save new customers 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("users");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveManager = saveManager;


async function saveorder(details){  //save new order
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("orders");
  var result = await col.insertOne(details);
  client.close();
  return result;
}

exports.saveorder=saveorder;


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

async function SaveNewMenShoes(details){  // save new men shoe to mongoDB
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("men");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.SaveNewMenShoes = SaveNewMenShoes;

async function SaveNewWomanShoes(details){  // save new woman shoe to mongoDB
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("women");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.SaveNewWomanShoes = SaveNewWomanShoes;


async function SaveNewKidsShoes(details){  // save new kids shoe to mongoDB
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("kids");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.SaveNewKidsShoes = SaveNewKidsShoes;


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

async function getUsers(){  // get all the exist users 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var dbo = client.db("sneakers");
  let collection= dbo.collection('users');
  let res=await collection.find({}).toArray() 
  client.close();
  return res;
};
exports.getUsers = getUsers;


async function closeOrders(details){  // mark order as completed
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var date=new Date()
  var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
  var dbo = client.db("sneakers");
  var myquery = { address: details };
  var newvalues = { $set: { status: "Close",close_date:split_date } };
  let collection= dbo.collection('orders');
  let res=await collection.updateOne(myquery,newvalues);
  client.close();
  return res;
};
exports.closeOrders = closeOrders;

async function deleteUser(details){  //delete user
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var dbo = client.db("sneakers");
  var myquery = { Email: details };
  let collection= dbo.collection('users');
  let res=await collection.deleteOne(myquery);
  client.close();
  return res;
};
exports.deleteUser = deleteUser;


async function saveNewOrder(details){   //add products to cart
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  var col = client.db("sneakers").collection("orderDetails");
  var result = await col.insertOne(details);
  client.close();
  return result;
}
exports.saveNewOrder = saveNewOrder;



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



async function deleteOrder(){  //delete cart after purchase 
  var client = new MongoClient(url, {useUnifiedTopology: true});
  await client.connect();
  const db = client.db("sneakers");
var myquary= {name: /^ /}
  let collection = db.collection('orderDetails');
  let res = await collection.deleteMany(myquary);
  client.close();
  return res;
}
exports.deleteOrder=deleteOrder;












