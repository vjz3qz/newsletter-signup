const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res) {
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const email=req.body.email;
    res.send("Hello "+firstName+" "+lastName+". Thanks for signing up with the email: "+email);
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});