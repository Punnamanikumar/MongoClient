//! Step -4
//! Query the Documents (GET)

mongodb = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";

mongodb.connect(mongoUrl, (err, suc) => {
  if (err) throw err;
  const actualDb = suc.db("school");
  actualDb
    .collection("students")
    .find({ name: "a" })
    .toArray((err, result) => {
      //! * toArray() Extra func in MongoClinet.
      if (err) console.log(err);
      console.log(result);
    });
});
