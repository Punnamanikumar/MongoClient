//! step-3
//! Inserting the document inside the collection.

const mongodb = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";

mongodb.connect(mongoUrl, (err, suc) => {
  if (err) throw err;
  const actualDb = suc.db("school");

  //!Inserting Single Document by insertOne()

  // const student = { roll: 1, name: "a", class: "X" };
  // actualDb.collection("students").insertOne(student, (err, suc) => {
  //   if (err) console.log(err);
  //   console.log("Single Document inserted Sucessfully");
  // });

  //!Inserting Many Document by insertMany()

  const studentData = [
    { roll: 2, name: "b", class: "XI" },
    { roll: 3, name: "c", class: "IX" },
  ];
  actualDb.collection("students").insertMany(studentData, (err, suc) => {
    if (err) console.log(err);
    console.log("Multiple Documents inserted Sucessfully");
  });
});
