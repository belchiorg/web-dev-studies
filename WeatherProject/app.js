const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {

    res.sendFile(__dirname + "/index.html");
    
})

app.post("/", (req, res) => {
    const query = req.body.cityName;
    const appKey = "a954fecfe2c82b082a0d0ccae7b11d87";
    const units = "metric";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid="+ appKey +"&units=" + units;
    https.get(url, (apiRes) => {
        console.log(res.statusCode);

        apiRes.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;

            res.write("<h1>The temperature in Lisbon is " + temp + " degrees Celsius.</h1>");
            res.write("<h3>The weather is currently " + weatherDesc + ".</h3>");
            res.write("<img src=\"http://openweathermap.org/img/wn/" + icon + "@2x.png\">")
            res.send();
        })
    })
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
});
