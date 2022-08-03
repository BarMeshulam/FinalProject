const {Router} = require('express')
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


app.get('/addmanager', (req, res) => { // add new user by admin
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

app.get('/NewMenProduct', (req, res) => { //save new Men shoes
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

app.get('/NewWomanProduct', (req, res) => { //save new Woman shoes
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


app.get('/NewKidsProduct', (req, res) => { //save new Kids shoes
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

app.get("/getOpenOrders", (req, res) => { //get open orders from mongo
  async function getOrders() {
    await mydb.GetOpenOrders().then((result) => res.send(result));
  }
  getOrders();
});

app.get("/getusers", (req, res) => { //get exist users from mongoDB
  async function users() {
    await mydb.getUsers().then((result) => res.send(result));
  }
 users();
});


app.get("/getclose", (req, res) => { //mark order as completed by name

  var close = req.query.address

  async function getclose(details) {
    await mydb.closeOrders(details).then((result) => res.redirect('managerindex.html'));
  }
  getclose(close);
});

app.get("/delete", (req, res) => { //delete user 

  var Delete = req.query.Email

  async function getclose(details) {
    await mydb.deleteUser(details).then((result) => res.redirect('managerindex.html'));
  }
  getclose(Delete);
});



app.get('/addNewOrder', (req, res) => { // get order details to the cart
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

app.get("/getorder", (req, res) => { // get Order Details
  async function myData() {
    await mydb.getOrderDetails().then((result) => res.send(result));
  }
  myData();
});

app.get("/deleteLastOrder", (req, res) => { // delete the cart
  async function deleteLast() {
    await mydb.deleteOrder().then((result) => res.redirect('customerindex.html'));
  }
  deleteLast();
});

app.get("/login",async(req,res)=>{ // Verify login by Email and password
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