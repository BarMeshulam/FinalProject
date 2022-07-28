const express = require('express')
const app = express()
const port = 3000
const mydb = require("./models/dbAdapter.js");

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
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


app.get('/addNewOrder', (req, res) => { // get order details to the cart
  var order =
  {
    name: req.query.nameProduct,
    quantity: req.query.quantityProduct,
    price: req.query.priceProduct,
    img:req.query.img,
    total: req.query.price*req.query.quantity, 
  }
  async function mysave(details) {
    await mydb.saveNewOrder(details).then((result) => res.redirect('customerindex.html'));
  }
  mysave(order);

})

app.get('/addorder', (req, res) => { // add order to mongo
  var date=new Date()
  var split_date=date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()
 var neworder =
 {
   name: req.query.name,
   city: req.query.city,
   address: req.query.address,
   order_date:split_date,
   status:"open",
   nameProduct:req.query.nameProduct,
   price:req.query.priceProduct,
   size:req.query.sizeProduct,
   quantity:req.query.quantityProduct
 }
 async function myorder(details) {
   await mydb.saveorder(details).then((result) => res.redirect('http://localhost:3000/orderClosed.html'));
 }
 myorder(neworder);

})

app.get("/getorder", (req, res) => { // get Order Details
  async function myData() {
    await mydb.getOrderDetails().then((result) => res.send(result));
  }
  myData();
});

app.get('/addCustomers', (req, res) => { //add new customer
  var newClient =
  {
    Fname: req.query.Fname,
    Lname: req.query.Lname,
    Phone: req.query.Phone,
    Email: req.query.Email,
    password: req.query.Password,
    user:"customer"
  }
  async function mysave(details) {
    await mydb.saveClient(details).then((result) => res.redirect('customerindex.html'));
  }
  mysave(newClient);

})


app.get("/deleteLastOrder", (req, res) => { // delete the cart

  async function deleteLast() {
    await mydb.deleteOrder().then((result) => res.redirect('customerIndex.html'));
  }
  deleteLast();
});


app.get("/getOpenOrders", (req, res) => { //get open orders from mongo
  async function getOrders() {
    await mydb.GetOpenOrders().then((result) => res.send(result));
  }
  getOrders();
});