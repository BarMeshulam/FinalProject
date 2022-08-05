function AddMen() { //Creating a table of men's shoes with the option to add to the shopping cart
    fetch("/getMen")
      .then((response) => response.text())
      .then((data) => {
        var Men = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th>Name</th>
              <th> &nbsp; </th> <th> &nbsp; </th> 
              <th> Image</th>
              <th> &nbsp; </th> <th> &nbsp; </th> 
              <th>Price$</th>
              <th> &nbsp; </th> <th> &nbsp; </th> 
              <th>Size</th>
              <th> &nbsp; </th> <th> &nbsp; </th> <th> &nbsp; </th>
              <th>Quantity </th>
              <th> &nbsp; </th> <th> &nbsp; </th> 
              <th>Add to cart </th>
            
          </tr>
      </table>`;
        Men.forEach((element) => {
          myTables += `<datalist id="quantity">
          <option value ="1">
          <option value ="2">
          <option value ="3">
          <option value ="4">
          </datalist>
          <datalist id="size">
          <option value ="40">
          <option value ="41">
          <option value ="42">
          <option value ="43">
          <option value ="44">
          <option value ="45">
          </datalist>
                  <form action="/addNewOrder">
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                          </td>
                          <td> <input type="hidden" name="priceProduct" value="${element.price}">${element.price}</td>
                          <td> <input list="size" id="size" placeholder="size" name="sizeProduct" autocomplete="off" required></td>
                          <td> <input list="quantity" id="quantity" placeholder="quantity" name="quantityProduct" autocomplete="off" required></td>
                          <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                      </tr>
                    </form>
                    </table>
                  
                  `;
        });
        document.getElementById("addToCartMen").innerHTML = myTables;
      });
  }

  
function AddWoman() { //Creating a table of woman's shoes with the option to add to the shopping cart
    fetch("/getWoman")
      .then((response) => response.text())
      .then((data) => {
        var Woman = JSON.parse(data);
        var myTables = `<table class="styled-table">
        <th >Name</th>
        <th> &nbsp; </th> <th> &nbsp; </th> 
        <th> Image</th>
        <th> &nbsp; </th> <th> &nbsp; </th> 
        <th>Price$</th>
        <th> &nbsp; </th> <th> &nbsp; </th> 
        <th>Size</th>
        <th> &nbsp; </th> <th> &nbsp; </th> <th> &nbsp; </th>
        <th>Quantity </th>
        <th> &nbsp; </th> <th> &nbsp; </th> 
        <th>Add to cart </th>
        
      </tr>
  </table>`;
        Woman.forEach((element) => {
          myTables += `<datalist id="quantity">
          <option value ="1">
          <option value ="2">
          <option value ="3">
          <option value ="4">
          </datalist>
          <datalist id="size">
          <option value ="35">
          <option value ="36">
          <option value ="37">
          <option value ="38">
          <option value ="39">
          <option value ="40">
          </datalist>

            <form action="/addNewOrder">
            <table class="styled-table" >
         
                <tr>
                    <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                    <td ><input type="hidden" name="img" value="${element.img}">
                    <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                    </td>
                    <td> <input type="hidden" name="priceProduct" value="${element.price}">${element.price}</td>
                    <td> <input list="size" id="size" placeholder="size" name="sizeProduct" autocomplete="off" required></td>
                    <td> <input list="quantity" id="quantity" placeholder="quantity" name="quantityProduct" autocomplete="off" required></td>
                    <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                </tr>
            </form>
            </table>
                  `;
        });
        document.getElementById("addToCartWoman").innerHTML = myTables;
      });
  }

  function AddKids() { //Creating a table of kids shoes with the option to add to the shopping cart
    fetch("/getKids")
      .then((response) => response.text())
      .then((data) => {
        var Kids = JSON.parse(data);
        var myTables = `<table class="styled-table">
                  <tr>
                  <th >Name</th>
                  <th> &nbsp; </th> <th> &nbsp; </th> 
                  <th> Image</th>
                  <th> &nbsp; </th> <th> &nbsp; </th> 
                  <th>Price$</th>
                  <th> &nbsp; </th> <th> &nbsp; </th> 
                  <th>Size</th>
                  <th> &nbsp; </th> <th> &nbsp; </th> <th> &nbsp; </th>
                  <th>Quantity </th>
                  <th> &nbsp; </th> <th> &nbsp; </th> 
                  <th>Add to cart </th>
                
              </tr>
          </table>`;
        Kids.forEach((element) => {
          myTables += `<datalist id="quantity">
          <option value ="1">
          <option value ="2">
          <option value ="3">
          <option value ="4">
          </datalist>
          <datalist id="size">
          <option value ="28">
          <option value ="29">
          <option value ="30">
          <option value ="31">
          <option value ="32">
          <option value ="33">
          </datalist>

            <form action="/addNewOrder">
            <table class="styled-table" >

                <tr>
                    <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                    <td ><input type="hidden" name="img" value="${element.img}">
                    <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                    </td>
                    <td> <input type="hidden" name="priceProduct" value="${element.price}">${element.price}</td>
                    <td> <input list="size" id="size" placeholder="size" name="sizeProduct" autocomplete="off" required></td>
                    <td> <input list="quantity" id="quantity" placeholder="quantity" name="quantityProduct" autocomplete="off" required></td>
                    <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                </tr>
            </form>
            </table>
          `;
        });
        document.getElementById("addToCartKids").innerHTML = myTables;
      });
  }


  function showorder() { //Shows the existing products in the shopping cart and creates a form for entering the details of the ordering customer
    fetch("/getorder")
      .then((response) => response.text())
      .then((data) => {
        var Types = JSON.parse(data);
        var myTables = `
        
        <table class="styled-table">
                <th >Name</th>
                <th> &nbsp;&nbsp;</th>
                <th> &nbsp; Image</th>
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
      fetchPage('addMen.html'),AddMen();
    }
    if (val.toLowerCase() === "woman"){
      fetchPage('addWoman.html'),AddWoman();
    }
    if (val.toLowerCase() === "kids") {
      fetchPage('addKids.html'),AddKids();
    }
    if (val.toLowerCase() != "men" && val.toLowerCase() != "woman" && val.toLowerCase() != "kids"){
      alert('no '+ val+ ' product')
    } 
  
  }
