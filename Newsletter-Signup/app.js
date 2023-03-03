const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios');

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {

    const url = "https://us14.mailchimp.com/account/api/lists/c82737e015"

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    console.log(email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const request = https.request(url, { method: "POST", auth: "biro:95ec83d6ad28c3f7a6ab1e6b21efcbdf-us14", headers: "json" }, (response) => {
        response.on("data", (data2) => {
            const jsonuwu = JSON.parse(data2);
            console.log(jsonuwu);
        })
    })

    request.write(jsonData);
    request.end();

})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});

//API KEY: 95ec83d6ad28c3f7a6ab1e6b21efcbdf-us14
//Audience ID: c82737e015