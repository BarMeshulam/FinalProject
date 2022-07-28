function AddMen() { //create table for Men's sneakers
    fetch("/getMen")
      .then((response) => response.text())
      .then((data) => {
        var Men = JSON.parse(data);
        var myTables = `<table class="styled-table" >
              <tr>
              <th> &nbsp; </th>
              <th >Name</th>
              <th> &nbsp; </th>
              <th>Image</th>
              <th> &nbsp; </th>
              <th>Size</th>
              <th> &nbsp; </th>
              <th>Price$</th>
              <th> &nbsp; </th>
              <th>Quantity </th>
              <th> &nbsp; </th>
              <th>Add to cart </th>
            
          </tr>
      </table>`;
        Men.forEach((element) => {
          myTables += `
                        <form action="/addNewOrder">
                  <table class="styled-table" >
                 
                      <tr>
                          <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                          </td>
                          <td>
                          <label for="size">Choose a size:</label>
                          <select name="sizeProduct" id="Size">
                          <option value="size">Your size</option>
                            <option value="size">40</option>
                            <option value="size2">41</option>
                            <option value="size3">42</option>
                            <option value="size4">43</option>
                            <option value="size5">44</option>
                            <option value="size6">45</option>
                          </select>
                          </td>
                          <td> <input type="hidden" name="priceProduct" value="${element.price}">${element.price}</td>
                          <td>
                          <input list="quantity" id="quantity" placeholder="quantity" name="quantityProduct" required></td>
                          <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                      </tr>
                      </form>
                      </table>
                  
                  `;
        });
        document.getElementById("addToCartMen").innerHTML = myTables;
      });
  }

  
function AddWoman() { //create table for woman's sneakers
    fetch("/getWoman")
      .then((response) => response.text())
      .then((data) => {
        var Woman = JSON.parse(data);
        var myTables = `<table class="styled-table">
          <tr>
          <th >Name</th>
          <th> &nbsp; </th>
          <th>Image</th>
          <th> &nbsp; </th>
          <th>Size</th>
          <th> &nbsp; </th>
          <th>Price$</th>
          <th> &nbsp; </th>
          <th>Quantity </th>
          <th> &nbsp; </th>
          <th>Add to cart </th>
        
      </tr>
  </table>`;
        Woman.forEach((element) => {
          myTables += `
          <form action="/addNewOrder">
    <table class="styled-table" >
   
        <tr>
            <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
           
            <td ><input type="hidden" name="img" value="${element.img}">
            <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
            </td>
            <td>
            <label for="size">Choose a size:</label>
            <select name="size" id="Size">
            <option value="size">Your size</option>
              <option value="size1">35</option>
              <option value="size2">36</option>
              <option value="size3">37</option>
              <option value="size4">38</option>
              <option value="size5">39</option>
              <option value="size6">40</option>
              
            </select>
            </td>
            <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
            <td>
            <input list="quantity" id="quantity" placeholder="quantity" name="quantity" required></td>
            <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
        </tr>
        </form>
        </table>
                  `;
        });
        document.getElementById("addToCartWoman").innerHTML = myTables;
      });
  }

  function AddKids() { //create table for kids sneakers
    fetch("/getKids")
      .then((response) => response.text())
      .then((data) => {
        var Kids = JSON.parse(data);
        var myTables = `<table class="styled-table">
                  <tr>
                  <th >Name</th>
                  <th> &nbsp; </th>
                  <th>Image</th>
                  <th> &nbsp; </th>
                  <th>Size</th>
                  <th> &nbsp; </th>
                  <th>Price$</th>
                  <th> &nbsp; </th>
                  <th>Quantity </th>
                  <th> &nbsp; </th>
                  <th>Add to cart </th>
                
              </tr>
          </table>`;
        Kids.forEach((element) => {
          myTables += `
                        <form action="/addNewOrder">
                  <table class="styled-table">
                 
                      <tr>
                          <td><input type="hidden" name="nameProduct" value="${element.name}">${element.name}</td>
                         
                          <td ><input type="hidden" name="img" value="${element.img}">
                          <img src="./photos/${element.img}.PNG" alt="${element.img}" width="150" height="120">
                          </td>
                          <td>
                          <label for="size">Choose a size:</label>
                          <select name="size" id="Size">
                          <option value="size">Your size</option>
                            <option value="size1">28</option>
                            <option value="size2">29</option>
                            <option value="size3">30</option>
                            <option value="size4">31</option>
                            <option value="size5">32</option>
                            <option value="size6">33</option>
                          </select>
                          </td>
                          <td> <input type="hidden" name="price" value="${element.price}">${element.price}</td>
                          <td>
                          <input list="quantity" id="quantity" placeholder="quantity" name="quantity" required></td>
                          <td><button onclick="openForm(),saveNewOrder()">Add To cart</button></td>
                      </tr>
                      </form>
                      </table>
          `;
        });
        document.getElementById("addToCartKids").innerHTML = myTables;
      });
  }

