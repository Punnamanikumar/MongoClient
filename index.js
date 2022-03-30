//! Step-1
//! Create the connection with the mongo

// const mongodb = require("mongodb").MongoClient; //! importing Mongodb Client

// const dbUrl = "mongodb://localhost:27017"; //?URL: mongodb://localhost:27017/myapp'
//! mongo command
// mongodb.connect(dbUrl, (err, db) => {
//   if (err) throw err;
//   console.log("Connected");
// });

//! Step-2
//! Create the database and creating a collection inside it.

// const mongodb = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";
// or
// const dbUrl = "mongodb://localhost:27017/test";

// mongodb.connect(mongoUrl, (err, suc) => {
//   if (err) throw err;
//   const actualDb = suc.db("school"); //! Creating a specific db we want to work on it.// use test
//   actualDb.createCollection("students", (err, suc) => {
//     if (err) console.log(err);
//     console.log("Student Collection is Created");
//   });
//   actualDb.createCollection("teachers", (err, suc) => {
//     if (err) console.log(err);
//     console.log("Teacher Collection is Created");
//   });
// });

//! step-3
//! Inserting the document inside the collection.

// const mongodb = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongodb.connect(mongoUrl, (err, suc) => {
//   if (err) throw err;
//   const actualDb = suc.db("school");

//   //!Inserting Single Document by insertOne()

// const student = { roll: 1, name: "a", class: "X" };
// actualDb.collection("students").insertOne(student, (err, suc) => {
//   if (err) console.log(err);
//   console.log("Single Document inserted Sucessfully");
// });

//   //!Inserting Many Document by insertMany()

//   const studentData = [
//     { roll: 2, name: "b", class: "XI" },
//     { roll: 3, name: "c", class: "IX" },
//   ];
//   actualDb.collection("students").insertMany(studentData, (err, suc) => {
//     if (err) console.log(err);
//     console.log("Multiple Documents inserted Sucessfully");
//   });
// });

//! Step -4
//! Query the Documents (GET)

// mongodb = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongodb.connect(mongoUrl, (err, suc) => {
//   if (err) throw err;
//   const actualDb = suc.db("school");
//   actualDb
//     .collection("students")
//     .find({ name: "a" })
//     .toArray((err, result) => {
//       //! * toArray() Extra func in MongoClinet
//       if (err) console.log(err);
//       console.log(result);
//     });
// });

//! Step -5
//! Updating the documents

// mongodb = require("mongodb").MongoClient;

// const mongoUrl = "mongodb://localhost:27017";

// mongodb.connect(mongoUrl, (err, suc) => {
//   if (err) console.log(err);
//   const actualDb = suc.db("school");

//! Update SingleDocument.
// let query = { roll: 1 };
// let newData = { name: "AAA" };
// actualDb
//   .collection("students")
//   .updateOne(query, { $set: newData }, (err, result) => {
//     if (err) console.log(err);
//     console.log("DOcument Updated Sucessfully", result);
//   });

//! Update ManyDocuments.
//   let query = { roll: 1 };
//   let newData = { name: "d" };
//   actualDb
//     .collection("students")
//     .updateMany(query, { $set: newData }, (err, result) => {
//       if (err) console.log(err);
//       console.log("Update Many Sucessful");
//     });
// });

//! Step -6
//! Delete the documents

mongodb = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongodb.connect(mongoUrl, (err, suc) => {
  if (err) console.log(err);
  const actualDb = suc.db("school");

  //! Delete SingleDocument.
  // let query = { roll: 3 };
  // or
  // let query={roll:{$lt:2}}
  // actualDb.collection("students").deleteOne(query, (err, result) => {
  //   if (err) console.log(err);
  //   console.log("Single Document Deleted Sucessfully", result);
  // });

  //! Delete ManyDocuments.
  let query = { roll: { $lt: 3 } };
  actualDb.collection("students").deleteMany(query, (err, result) => {
    if (err) console.log(err);
    console.log("Many Documents Deleted Sucessfully", result);
  });
});
