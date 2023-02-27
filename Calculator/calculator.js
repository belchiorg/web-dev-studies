const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded( {extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("<h1>Result:</h1><p>" + (Number(req.body.num1) + Number(req.body.num2)) +"</p>");
})

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html");
})

app.get("/joke", (req,res) => {
    res.send("<h1>")
})

app.post("/bmicalculator", (req, res) => {
    let result = req.body.weight / (req.body.height ** 2);
    
    res.send("<h1>BMI Calculator:</h1><p>Your BMI is "+ result + "</p>");
})

app.listen(3000, () =>{
    console.log("Listening on port 3000...");
});
