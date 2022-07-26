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