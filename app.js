const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running.");
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/contact", function(req, res) {
    console.log(req.body)
    res.redirect("/success.html");
});