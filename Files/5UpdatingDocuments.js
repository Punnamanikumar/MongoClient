//! Step -5
//! Updating the documents

mongodb = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";

mongodb.connect(mongoUrl, (err, suc) => {
  if (err) console.log(err);
  const actualDb = suc.db("school");

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
  let query = { roll: 1 };
  let newData = { name: "d" };
  actualDb
    .collection("students")
    .updateMany(query, { $set: newData }, (err, result) => {
      if (err) console.log(err);
      console.log("Update Many Sucessful");
    });
});
