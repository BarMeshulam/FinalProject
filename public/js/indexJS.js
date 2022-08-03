function fetchPage(whatPage) { //fetch page
  fetch(whatPage)
    .then((response) => response.text())
    .then((data) => (document.getElementById("rednerPage").innerHTML = data));
}
function showMen() { //create table for Men's sneakers
  fetch("/getMen")
    .then((response) => response.text())
    .then((data) => {
      var Men = JSON.parse(data);
      var myTables = `<table class="styled-table" >
            <tr>
            <th></th>
            <th >Name</th>
            <th>Image</th>
            <th>Price $</th>
            
          
        </tr>
    </table>`;
      Men.forEach((element) => {
        myTables += `
                      <form action="/addNewOrder">
                <table class="styled-table" >
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                       
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

                    </tr>
                    </form>
                    </table>
                
                `;
      });
      document.getElementById("mensneakers").innerHTML = myTables;
    });
}

function showWoman() { //create table for woman's sneakers
  fetch("/getWoman")
    .then((response) => response.text())
    .then((data) => {
      var Woman = JSON.parse(data);
      var myTables = `<table class="styled-table">
        <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Price $</th>

    </tr>
</table>`;
      Woman.forEach((element) => {
        myTables += `
        <form action="/addNewOrder">
  <table class="styled-table" >
 
      <tr>
          <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
         
          <td ><input type="hidden" name="img" value="${element.img}">
          <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
          </td>
          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

      </tr>
      </form>
      </table>
                `;
      });
      document.getElementById("womansneakers").innerHTML = myTables;
    });
}

function showKids() { //create table for kids sneakers
  fetch("/getKids")
    .then((response) => response.text())
    .then((data) => {
      var Kids = JSON.parse(data);
      var myTables = `<table class="styled-table">
                <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th> Price $</th>
              
            </tr>
        </table>`;
      Kids.forEach((element) => {
        myTables += `
                      <form action="/addNewOrder">
                <table class="styled-table">
               
                    <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                       
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
                        
                    </tr>
                    </form>
                    </table>
        `;
      });
      document.getElementById("kidssneakers").innerHTML = myTables;
    });
}

function showorder() { //show the cart
  fetch("/getorder")
    .then((response) => response.text())
    .then((data) => {
      var Types = JSON.parse(data);
      var myTables = `
      
      <table class="styled-table">
              <th >Name</th>
              <th> &nbsp;&nbsp;</th>
              <th> &nbsp; mage</th>
              <th> &nbsp; </th>
              <th>Price$</th>
              <th> &nbsp; </th>
              <th> Size </th>
              <th> &nbsp; </th>
              <th>Quantity </th>
              <th> Total</th>
              
            </tr>
        </table>
        `;
      Types.forEach((element) => {
        myTables += `
        <form action="/addorder" >
                <table class="styled-table" >
                    <tr>
                    <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                    <th> &nbsp; </th>
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./photos/${element.img}.png" alt="${element.img}" width="150" height="120">
                        <th> &nbsp; </th>
                        </td>
                        <td><input type="hidden" name="priceProduct" value="${element.price}"> ${element.price}</td>
                        <th> &nbsp; </th>
                        <td><input type="hidden" name="sizeProduct" value="${element.size}"> ${element.size}</td>
                        <th> &nbsp; </th>
                        <td><input type="hidden" name="quantityProduct" value="${element.quantity}"> ${element.quantity}</td>
                        <th> &nbsp; </th>
                        <td><input type="hidden" name="total" value="${element.total}"> ${element.total}</td>
                    </tr>
                    </form>
                    </table>
                    `; 
         
                    
      });
      document.getElementById("myOrder").innerHTML = myTables;
    });
}

function getval(){ //search by category name
  const val = document.querySelector('input').value;
  if(val.toLowerCase() === "men"){
    fetchPage('men.html'),showMen();
  }
  if (val.toLowerCase() === "woman"){
    fetchPage('woman.html'),showWoman();
  }
  if (val.toLowerCase() === "kids") {
    fetchPage('kids.html'),showKids();
  }
  if (val.toLowerCase() != "men" && val.toLowerCase() != "woman" && val.toLowerCase() != "kids"){
    alert('no '+ val+ ' product')
  } 

}