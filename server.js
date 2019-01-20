// init project
const express = require("express"); // the library we will use to handle requests
//app.use(require("cors")()); // allow Cross-domain requests
const bodyParser = require("body-parser");
const app = express(); // instantiate express
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("dotenv").config();
const mongodb = require("mongodb");
const uri = process.env.URI;
//const collection = `${uri}Customers`;

let dbName = "local";
let collName = "Customers";

mongodb.MongoClient.connect(
  uri,
  { useNewUrlParser: true },
  function(err, db) {
    // base route
    app.get("/api/landing", (req, res) => {
      //connect to Mongo, process the things, send back a response

      res.send({ body: "[serverSide] you reached the landing" });
    });

    // base route
    app.post("/api/landing/login/:un/:pw", (req, res) => {
      //parsing params
      //console.log(req.params);
      const newVal = { user: req.params.un, pw: req.params.pw };
      console.log(newVal);
      //console.log(db);
      //console.log(uri);
      if (err) throw err;
      let dbo = db.db(dbName);
      dbo.collection(collName).insertOne(newVal, function(err, res) {
        if (err) throw err;

        //db.close();
        // return res.send({ body: err });
      });

      res.send({ body: `${newVal} inserted` });
    });

    app.put("/api/landing/update", function(req, res) {
      res.send("[serverSide] update statement");
    });

    // listen for requests
    var listener = app.listen(port, function() {
      console.log("Your app is listening on port " + port);
    });
  }
);
