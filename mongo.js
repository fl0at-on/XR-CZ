//import MongoClient from "mongodb";
var MongoClient = require("mongodb").MongoClient;

let baseMongo = "mongodb://";
let server = "localhost:27017/";
let dbName = "local";
let collName = "Customers";

let connString = `${baseMongo}${server}${dbName}`;
let query = { address: /^O/ };
let sortOptions = { name: -1 };
let proj = { _id: 0 };

let newValue = { $set: { name: "Mickey", address: "Canyon 123" } };
let newValues = { $set: { name: "Minnie" } };

let newObject = { name: "Company Inc", address: "Highway 37" };
let newObjects = [
  { name: "John", address: "Highway 71" },
  { name: "Peter", address: "Lowstreet 4" },
  { name: "Amy", address: "Apple st 652" },
  { name: "Hannah", address: "Mountain 21" },
  { name: "Michael", address: "Valley 345" },
  { name: "Sandy", address: "Ocean blvd 2" },
  { name: "Betty", address: "Green Grass 1" },
  { name: "Richard", address: "Sky st 331" },
  { name: "Susan", address: "One way 98" },
  { name: "Vicky", address: "Yellow Garden 2" },
  { name: "Ben", address: "Park Lane 38" },
  { name: "William", address: "Central st 954" },
  { name: "Chuck", address: "Main Road 989" },
  { name: "Viola", address: "Sideway 1633" }
];

//Update many records in collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).updateMany(query, newValues, function(err, res) {
//       if (err) throw err;
//       console.log(`${res.result.nModified} document(s) updated`);
//       //pass res over to the frontend?

//       db.close();
//     });
//   }
// );

//Update record in collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).updateOne(query, newValue, function(err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       //pass res over to the frontend?

//       db.close();
//     });
//   }
// );

//Delete one object from collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).deleteMany(
//       query,

//       function(err, res) {
//         if (err) throw err;
//         console.log(res.result);
//         //pass res over to the frontend?

//         db.close();
//       }
//     );
//   }
// );

//Delete one object from collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).deleteOne(
//       query,

//       function(err, res) {
//         if (err) throw err;
//         console.log("item deleted");
//         //pass res over to the frontend?

//         db.close();
//       }
//     );
//   }
// );

//Find Record in collection that match {} definition
//Return specific fields based on the projection object
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo
//       .collection(collName)
//       .find(query, { projection: proj })
//       .sort(sortOptions)
//       .toArray(function(err, res) {
//         if (err) throw err;
//         console.log(res);
//         //pass res over to the frontend?

//         db.close();
//       });
//   }
// );

//Find one Record in collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).findOne({}, function(err, res) {
//       if (err) throw err;
//       console.dir(res);
//       db.close();
//     });
//   }
// );

//Insert Many into collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).insertMany(newObjects, function(err, res) {
//       if (err) throw err;
//       console.log(`# of Records inserted: ${res.insertedCount}`);
//       db.close();
//     });
//   }
// );

//Insert One into collection
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).insertOne(newObject, function(err, res) {
//       if (err) throw err;
//       console.log(`${newObject} inserted`);
//       db.close();
//     });
//   }
// );

//Create a collection, collection name stored above
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.createCollection(collName, function(err, res) {
//       if (err) throw err;
//       console.log(`${collName} created`);
//       db.close();
//     });
//   }
// );

//Drop a collection take 2
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.dropCollection(collName, function(err, delCompleted) {
//       if (err) throw err;
//       if (delCompleted) console.log(`${collName} deleted`);
//       //pass res over to the frontend?

//       db.close();
//     });
//   }
// );

//Drop a collection take 1
// MongoClient.connect(
//   connString,
//   { useNewUrlParser: true },
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     dbo.collection(collName).drop(function(err, delCompleted) {
//       if (err) throw err;
//       if (delCompleted) console.log(`${collName} deleted`);
//       //pass res over to the frontend?

//       db.close();
//     });
//   }
// );

///Testing connection & create a database?
// MongoClient.connect(
//   connString,
//   function(err, db) {
//     if (err) throw err;
//     let dbo = db.db(dbName);
//     console.log("Database created!");
//     db.close();
//   }
// );
