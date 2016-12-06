// get dependencies
var http = require('http');
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var server = http.createServer(app);

var port = process.env.PORT || 8080; // used to create, sign, and verify tokens

server.listen(port, function() {
    console.info('Server running on port', port);
});

// services
var twilioService = require("./twilioService")();

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

var apiRoutes = express.Router();    

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

apiRoutes.post('/process', twilioService.processPacket);


//});   

// apply the routes to our application with the prefix /api
app.use('/api',  apiRoutes);



////////////////////////
//app.listen(port);
console.log('Magic happens at http://localhost:' + port);


