  function openFormAddNewMenShoes() { //form that allows the manager to add a men's shoe to the catalog
    document.getElementById("myFormMen").style.display = "block";
  }
  
  function openFormAddNewWomanShoes() { //form that allows the manager to add a woman's shoe to the catalog
    document.getElementById("myFormWoman").style.display = "block";
  }
  
  function openFormAddNewKidsShoes() { //form that allows the manager to add a kids shoe to the catalog
    document.getElementById("myFormKids").style.display = "block";
  }
  

  
  function closeFormNewMenShoes() { //Allows the manager to exit the form of adding a men's shoe to the catalog without adding the shoe
    document.getElementById("myFormMen").style.display = "none";
  }
  
  function closeFormNewWomanShoes() { //Allows the manager to exit the form of adding a woman's shoe to the catalog without adding the shoe
    document.getElementById("myFormWoman").style.display = "none";
  }
  
  function closeFormNewKidsShoes() { //Allows the manager to exit the form of adding a kids shoe to the catalog without adding the shoe
    document.getElementById("myFormKids").style.display = "none";
  }


  function showOpenOrders() { // create table to see all the open orders
    fetch("/getOpenOrders")
      .then((response) => response.text())
      .then((data) => {
        var OrdersTypes = JSON.parse(data);
        var myTables = `<table class="styled-table">
            <tr>
            <th style="width:100px">Name </th>
            <th style="width:100px">Address</th>
            <th style="width:100px">City</th>
            <th style="width:100px">Name Product</th> 
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
                            <td> <input type="hidden" name="name" value="${element.name}">${element.name}</td>
                            <td> <input type="hidden" name="address" value="${element.address}">${element.address}</td>
                            <td style="width:100px">${element.city}</td>
                            <td style="width:100px">${element.nameProduct}</td>
                            <td> <input type="hidden" name="status" value="${element.status}">${element.status}</td>
                            <td style="width:100px">${element.order_date}</td>
                            <td> <button onclick="closeOrders()"> Close order</button></td>                           
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
                  <td> <input type="hidden" name="Email" value="${element.Email}">${element.Email}</td>
                  <td> ${element.user}</td>
                  <td> <button onclick="deleteUser()"> Delete User</button></td>  
              </tr>
          </table>
          </form>`;
        });
        document.getElementById("activeUsers").innerHTML = myTables;
      });
  }