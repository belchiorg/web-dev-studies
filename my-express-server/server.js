const { response } = require('express');
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Server has started on port 3000");
});

app.get("/", (req, res) => {
    console.log(req);
    res.send("Hello");
});

app.get("/contact", (req, res) => {
    res.send("<h3>Contact me at: guilherme.belchior1743@gmail.com</h3>")
});

app.get("/about", (req,res) => {
    res.send("<h1>About me: </h1><p>I am Guilherme Belchior and I'm studying to be a fullstack engineer</p>");
});