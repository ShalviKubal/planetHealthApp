var express = require('express');
var app = express();
var port = 8000;
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
 
// Create a document object using the ID of the spreadsheet - obtained from its URL.

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/login', function (req, res) {
    var result = {};
    if(req.body.email == "demo@admin.com" && req.body.password == "admin123"){
        result={
            message : "successful.login"
        }
        res.send(result);
    }
    else{
        result = {
            errorCode :"healthapp.login.invalid.usernamepassword"
        }
        res.send(result);
    }
    
});
app.get('/getHealthData',function (req,res){
    var doc = new GoogleSpreadsheet('15znRJkFc2w1tSDhOu3qyJy_hYXOmogAXnic9QfdMKdo');   
    doc.useServiceAccountAuth(creds, function (err) {
      // Get all of the rows from the spreadsheet.
        doc.getRows(1, function (err, rows) {
            console.log(rows);
            result={
                value : rows
            }
            res.send(result);
        });
    });
    
});

app.listen(port);
console.log('server is listening on '+ port);
 

