let express = require('express');
let app = express();
require ('dotenv').config();


app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message" : "HELLO JSON"});
    } else {
        res.json({"message" : "hello json"});
    }
})































 module.exports = app;
