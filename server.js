// init project
const express = require("express"); // the library we will use to handle requests
const app = express(); // instantiate express
//app.use(require("cors")()); // allow Cross-domain requests
app.use(require("body-parser").json()); // automatically parses request data to JSON
const port = process.env.PORT || 5000;

const mongodb = require("mongodb");
const uri = process.env.URI;
const collection = `${uri}Customers`;

// mongodb.MongoClient.connect(uri,function(err,db){

// base route
app.get("/landing", function(request, response) {
  //connect to Mongo, process the things, send back a response

  response.send("[serverSide] you have reached the landing"); // always responds with the string "TODO"
});

// base route
app.post("/landing/login", function(request, response) {
  response.send("[serverSide] login details enroute?"); // always responds with the string "TODO"
});

app.put("/landing/update", function(request, response) {
  response.send("[serverSide] update statement"); // always responds with the string "TODO"
});

// listen for requests, the process.env.PORT is needed because
// we are using glitch, otherwise you could have written 80 or whatever
var listener = app.listen(port, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
