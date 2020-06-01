// // const MongoClient = require("mongodb").MongoClient;
// const { MongoClient } = require('mongodb');

// async function main() {
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
//   const uri =
//     "mongodb+srv://ashwini_13:t240ooXQ7oVKRKVA@cluster0-5uqcv.mongodb.net/test?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//   try {
//     // Connect to the MongoDB cluster
//     await client.connect();
//     // Make the appropriate DB calls
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);



// async function listDatabases(client) {
//   const databasesList = await client.db().admin().listDatabases();
//   // console.log("Databases:");
//   databasesList.databases.forEach((db) => {
//     console.log(` - ${db.name}`)
//   });
// }

// module.exports = { main };

// new try----------------------------------------------------------------------------------
// db.js

// mongodb driver
const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://ashwini_13:t240ooXQ7oVKRKVA@cluster0-5uqcv.mongodb.net/test?retryWrites=true&w=majority";

function initialize(
  dbName,
  dbCollectionName,
  successCallback,
  failureCallback
) {
  MongoClient.connect(dbConnectionUrl, function (err, dbInstance) {
    if (err) {
      console.log(`[MongoDB connection] ERROR: ${err}`);
      failureCallback(err); // this should be "caught" by the calling function
    } else {
      const dbObject = dbInstance.db(dbName);
      const dbCollection = dbObject.collection(dbCollectionName);
      console.log("[MongoDB connection] SUCCESS");

      successCallback(dbCollection);
    }
  });
}

module.exports = {
  initialize
};

db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
  // get all items
  dbCollection.find().toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
  });

  // << db CRUD routes >>

}, function (err) { // failureCallback
  throw (err);
});