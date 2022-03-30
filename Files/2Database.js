// ! Step-2
// ! Create the database and creating a collection inside it.

const mongodb = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";
// or
// const dbUrl = "mongodb://localhost:27017/test";

mongodb.connect(mongoUrl, (err, suc) => {
  if (err) throw err;
  const actualDb = suc.db("school"); //! Creating a specific db we want to work on it.// use test
  actualDb.createCollection("students", (err, suc) => {
    if (err) console.log(err);
    console.log("Student Collection is Created");
  });
  actualDb.createCollection("teachers", (err, suc) => {
    if (err) console.log(err);
    console.log("Teacher Collection is Created");
  });
});
