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

