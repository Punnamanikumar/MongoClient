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
