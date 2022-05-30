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