let express = require('express');
let app = express();
require ('dotenv').config();


// app.get('/json', (req, res) => {
//     if (process.env.MESSAGE_STYLE === "uppercase") {
//         res.json({"message": "hello json".toUpperCase()});
//     } else {
//         res.json({"message": "Hello json"});
//     }
// })

app.use(function middleware(req, res, next) {
    console.log(req.method + " " + req.path + "json - " + req.ip);
    next();
})
































 module.exports = app;
