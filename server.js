var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";

var app = express();
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('/*', function(req,res) {
    
  res.sendFile(path.join(__dirname+'/dist/index.html'));
  });
  
  // Start the app by listening on the default Heroku port
  app.listen(process.env.PORT || 8080);

