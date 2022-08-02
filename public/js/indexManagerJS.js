function showManagerMenShoes() { //create table to men's shoes
    fetch("/getmen")
      .then((response) => response.text())
      .then((data) => {
        var menTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th >Name</th>
              <th>Image</th>
              <th>Price $</th>
          </tr>
      </table>`;
        menTypes.forEach((element) => {
          myTables += `
                  <table class="styled-table" >
                 
                      <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("mensneakers").innerHTML = myTables;
      });
  }


  function showManagerWomanShoes() { //create table to woman's shoes
    fetch("/getwoman")
      .then((response) => response.text())
      .then((data) => {
        var menTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th >Name</th>
              <th>Image</th>
              <th>Price $</th>
          </tr>
      </table>`;
        menTypes.forEach((element) => {
          myTables += `
                  <table class="styled-table" >
                 
                      <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("womansneakers").innerHTML = myTables;
      });
  }


  function showManagerKidsShoes() { //create table to kids shoes
    fetch("/getkids")
      .then((response) => response.text())
      .then((data) => {
        var menTypes = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th >Name</th>
              <th>Image</th>
              <th>Price $</th>
          </tr>
      </table>`;
        menTypes.forEach((element) => {
          myTables += `
                  <table class="styled-table" >
                 
                      <tr>
                        <td><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                        <td ><input type="hidden" name="img" value="${element.img}">
                        <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                        </td>
                        <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>

                      </tr>
                      </table>
                  
                  `;
        });
        document.getElementById("kidssneakers").innerHTML = myTables;
      });
  }


  function openFormAddNewMenShoes() { //form to add new men shoes
    document.getElementById("myFormMen").style.display = "block";
  }
  
  function openFormAddNewWomanShoes() { //form to add new woman shoes
    document.getElementById("myFormWoman").style.display = "block";
  }
  
  function openFormAddNewKidsShoes() { //form to add new kids shoes
    document.getElementById("myFormKids").style.display = "block";
  }
  

  
  function closeFormNewMenShoes() { //close the men form
    document.getElementById("myFormMen").style.display = "none";
  }
  
  function closeFormNewWomanShoes() { //close the woman form
    document.getElementById("myFormWoman").style.display = "none";
  }
  
  function closeFormNewKidsShoes() { //close the kids form
    document.getElementById("myFormKids").style.display = "none";
  }


  function showOpenOrders() { // create table to see all the open orders
    fetch("/getOpenOrders")
      .then((response) => response.text())
      .then((data) => {
        var OrdersTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
            <tr>
            <th style="width:100px">First Name </th>
            <th style="width:100px">Last Name</th>
            <th style="width:100px">Email</th>
            <th style="width:100px">Status</th>
            <th style="width:130px">Order date</th>
            <th style="width:100px">Order_close</th>
          </tr>
      </table>`;
        OrdersTypes.forEach((element) => {
          myTables += ` <form action ="/getclose">
                    <table class="styled-table">
                        <tr>
                        <td><input type="hidden" name="_id" value="${element._id}></td>
                            <td style="width:100px"><input type="hidden" name="name" value="${element.name}">${element.name}</td>
                            <td style="width:130px">${element.address}</td>
                            <td style="width:100px">${element.city}</td>
                            <td style="width:100px">${element.status}</td>
                            <td style="width:100px">${element.order_date}</td>
                            <td> <button onclick="closeOrder()"> Close order</button></td>                           
                        </tr>
                        </table>
                        </form>
                    `;
        });
        document.getElementById("OpenOrders").innerHTML = myTables;
      });
  }


  function showUsers() { // create table to see all the exist users 
    fetch("/getusers")
      .then((response) => response.text())
      .then((data) => {
        var userTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
        <tr>
        <th> First Name </th>
        <th> Last Name </th>
        <th> Phone</th>
        <th> Email</th>
        <th> User</th>
        <th> Delete</th>
        </tr>
        </table>`;
       userTypes.forEach((element) => {
          myTables += ` <form action="/delete">
          <table class="styled-table" >
              <tr>
                  <td> <input type="hidden" name="Fname" value="${element.Fname}">${element.Fname}</td>
                  <td> <input type="hidden" name="Lname" value="${element.Lname}">${element.Lname}</td>
                  <td> <input type="hidden" name="Phone" value="${element.Phone}">${element.Phone}</td>
                  <td> ${element.Email}</td>
                  <td> ${element.user}</td>
                  <td> <button onclick="deleteUser()"> Delete User</button></td>  
              </tr>
          </table>
          </form>`;
        });
        document.getElementById("activeUsers").innerHTML = myTables;
      });
  }