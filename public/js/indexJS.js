function fetchPage(whatPage) { //fetch page
  fetch(whatPage)
    .then((response) => response.text())
    .then((data) => (document.getElementById("rednerPage").innerHTML = data));
}
function showMen() { //Creating a table of men's shoes without the option to add to the shopping cart
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

function showWoman() { //Creating a table of woman's shoes without the option to add to the shopping cart
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

function showKids() { //Creating a table of kids shoes without the option to add to the shopping cart
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




