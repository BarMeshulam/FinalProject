const {Router} = require('express')
const express = require('express')

const app = express()
const port = 3000
const mydb = require("./models/dbAdapter.js");

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get('/addCustomers', (req, res) => { //add and save new customer into MongoDB and transfer him to the customer home page
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


app.get('/addmanager', (req, res) => { // add a new user that the manager create to Mongo DB and determine whether he is a customer or an manager 
 //                                       and transfer him to manager home page
  var newManager =
  {
    Fname: req.query.Fname,
    Lname: req.query.Lname,
    Phone: req.query.Phone,
    Email: req.query.Email,
    user: req.query.user,
    password: req.query.Password    
  }
  async function mysave(details) {
    await mydb.saveManager(details).then((result) => res.redirect('managerindex.html'));
  }
  mysave(newManager);

})

app.get('/addorder', (req, res) => { // Adds an order to MongoDB and sets it to an open status and transfer the customer to a complete order page
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
   size: req.query.sizeProduct,
   quantity:req.query.quantityProduct
 }
 async function myorder(details) {
   await mydb.saveorder(details).then((result) => res.redirect('http://localhost:3000/orderClosed.html'));
 }
 myorder(neworder);

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

app.get('/NewMenProduct', (req, res) => { //add and save the new Men shoes that the manager add into the MongoDB and transfer him to the manager home page
  var newMenProduct =
  {
    name: req.query.name,
    price: req.query.price,
    img: req.query.img
  }
  async function addNewMenShoes(details) {
    await mydb.SaveNewMenShoes(details).then((result) => res.redirect('managerindex.html'));
  }
  addNewMenShoes(newMenProduct);

})

app.get('/NewWomanProduct', (req, res) => { //add and save the new woman shoes that the manager add into the MongoDB and transfer him to the manager home page
  var newWomanProduct =
  {
    name: req.query.name,
    price: req.query.price,
    img: req.query.img
  }
  async function addNewWomanShoes(details) {
    await mydb.SaveNewWomanShoes(details).then((result) => res.redirect('managerindex.html'));
  }
  addNewWomanShoes(newWomanProduct);

})


app.get('/NewKidsProduct', (req, res) => { //add and save the new kinds shoes that the manager add into the MongoDB and transfer him to the manager home page
  var newKidsProduct =
  {
    name: req.query.name,
    price: req.query.price,
    img: req.query.img
  }
  async function addNewKidsShoes(details) {
    await mydb.SaveNewKidsShoes(details).then((result) => res.redirect('managerindex.html'));
  }
  addNewKidsShoes(newKidsProduct);

})

app.get("/getOpenOrders", (req, res) => { //get open orders from MongoDB
  async function getOrders() {
    await mydb.GetOpenOrders().then((result) => res.send(result));
  }
  getOrders();
});

app.get("/getusers", (req, res) => { //get exist users from MongoDB
  async function users() {
    await mydb.getUsers().then((result) => res.send(result));
  }
 users();
});


app.get("/getclose", (req, res) => { //mark order as completed by adress and transfer the manager to the manager home page

  var close = req.query.address

  async function getclose(details) {
    await mydb.closeOrders(details).then((result) => res.redirect('managerindex.html'));
  }
  getclose(close);
});

app.get("/delete", (req, res) => { //delete user from MongoDB and transfer the manager to manager home page

  var Delete = req.query.Email

  async function getclose(details) {
    await mydb.deleteUser(details).then((result) => res.redirect('managerindex.html'));
  }
  getclose(Delete);
});



app.get('/addNewOrder', (req, res) => { // get order details from MongoDB to the cart in the website and transfer the customer to customer home page
  var order =
  {
    name: req.query.nameProduct,
    size: req.query.sizeProduct,
    quantity: req.query.quantityProduct,
    price: req.query.priceProduct,
    img:req.query.img,
    total: req.query.priceProduct*req.query.quantityProduct, 
  }
  async function mysave(details) {
    await mydb.saveNewOrder(details).then((result) => res.redirect('customerindex.html'));
  }
  mysave(order);

})

app.get("/getorder", (req, res) => { // get Order Details from MongoDB
  async function myData() {
    await mydb.getOrderDetails().then((result) => res.send(result));
  }
  myData();
});

app.get("/deleteLastOrder", (req, res) => { // delete the last order from the shopping cart after the customer pay and transfer the customer to customer homepage
  async function deleteLast() {
    await mydb.deleteOrder().then((result) => res.redirect('customerindex.html'));
  }
  deleteLast();
});

app.get("/login",async(req,res)=>{ // Identifies if the user exists and what his type is, and moves him to the page relevant to him
  var User =
   {
    Email:req.query.Email,
    password :req.query.password,
  }
  async function myUser(details){
    await mydb.loginUser(details).then((result)=>{
      console.log("result:" , result);
      if (result == null){
        res.redirect('index.html')
      }
      else {
        for (const [key, value] of Object.entries(result)) {
        if (key == "user") {
          console.log(value);
          if (value.includes("manager")) {
            res.redirect('managerindex.html');
          }
          else {
            res.redirect('customerindex.html');
          }
        }
        }
      }
    })};
  await myUser(User);
 console.log(User)
});