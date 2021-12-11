
var express = require('express');
var app = express();

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);

console.log(__dirname);
app.use('/demo', express.static(__dirname + '/front_end'));





// Start the server.

app.listen(3000, function(){
    console.log("Server is running")
    
});