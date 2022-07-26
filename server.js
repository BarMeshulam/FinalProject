const express = require('express')
const app = express()
const port = 3000
const mydb = require("./models/dbAdapter.js");

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/addCustomers', (req, res) => { //add new customer
  var newClient =
  {
    name: req.query.name,
    ID: req.query.id,
    email: req.query.email,
    password: req.query.password,
    user:"customer"
  }
  async function mysave(details) {
    await mydb.saveClient(details).then((result) => res.redirect('CustomerIndex.html?#'));
  }
  mysave(newClient);

})

app.get('/addmanager', (req, res) => { // add new user by admin
  var newManager =
  {
    ID: req.query.id,
    email: req.query.email,
    password: req.query.password,
    user: req.query.user,
    name: req.query.name
    
  }
  async function mysave(details) {
    await mydb.saveManager(details).then((result) => res.redirect('adminindex.html'));
  }
  mysave(newManager);

})

app.get("/getmen", (req, res) => { //show all the mens sneakers
  async function getData() {
    await mydb.getmen().then((result) => res.send(result));
  }
  getData();
});


app.get("/getwoman", (req, res) => { //show all the womans sneakers
  async function myData() {
    await mydb.getwoman().then((result) => res.send(result));
  }
  myData();
});

app.get("/getkids", (req, res) => { //show all the kids sneakers
  async function watchData() {
    await mydb.getkids().then((result) => res.send(result));
  }
  watchData();
});


app.get("/getorder", (req, res) => { // get Order Details
  async function myData() {
    await mydb.getOrderDetails().then((result) => res.send(result));
  }
  myData();
});

