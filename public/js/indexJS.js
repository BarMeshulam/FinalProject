function loadHome() {
    fetch("http://localhost:3000/homePage.html")
    .then(function(response){
        return response.text()
    })
    .then(function(html){
        document.getElementById("rednerPage").innerHTML=html;

    });
}

function loadLogin() {
    fetch("http://localhost:3000/login.html")
    .then(function(response){
        return response.text()
    })
    .then(function(html){
        document.getElementById("rednerPage").innerHTML=html;

    });
}

function loadsignUp() {
    fetch("http://localhost:3000/signUp.html")
    .then(function(response){
        return response.text()
    })
    .then(function(html){
        document.getElementById("rednerPage").innerHTML=html;

    });
}

function loadContact() {
    fetch("http://localhost:3000/contactUs.html")
    .then(function(response){
        return response.text()
    })
    .then(function(html){
        document.getElementById("rednerPage").innerHTML=html;

    });
}

function loadCatalog() {
    fetch("http://localhost:3000/catalog.html")
    .then(function(response){
        return response.text()
    })
    .then(function(html){
        document.getElementById("rednerPage").innerHTML=html;

    });
}

function showTable() {
    fetch("/getsneack")
      .then((response) => response.text())
      .then((data) => {
        var sneackTypes = JSON.parse(data);
        var myTables = `<table class="styled-table"> <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
    </tr> </table>`;
        sneackTypes.forEach((element) => {
          myTables += `
                <table class="styled-table">
                    <tr>
                        <td>${element.name}</td>
                        <td>${element.price}</td>
                        <td>
                            <img src="./photos/${element.img}.png" alt="${element.img}" width="150" height="120">      
                        </tr>
                </table>
                `;
        });
        document.getElementById("myData").innerHTML = myTables;
      });
  }
  
