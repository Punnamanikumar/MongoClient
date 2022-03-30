//! Step-1
//! Create the connection with the mongo

const mongodb = require("mongodb").MongoClient; //! importing Mongodb Client

const dbUrl = "mongodb://localhost:27017"; //?URL: mongodb://localhost:27017/myapp'
//! mongo command
mongodb.connect(dbUrl, (err, db) => {
  if (err) throw err;
  console.log("Connected");
});
