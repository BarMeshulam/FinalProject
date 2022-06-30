const express = require('express')
const app = express()
const port = 3000
const mydb = require("./models/dbAdapter.js");

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

app.get("/getsneack", (req, res) => {
  async function getData() {
    await mydb.getSneackers().then((result) => res.send(result));
  }
  getData();
});

