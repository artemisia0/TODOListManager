const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const fs = require('fs');
const {MongoClient} = require('mongodb');
const path = require('path');


let db, records;
const dbUri = process.env.MY_MONGODB_URI;
if (!dbUri) {
  console.error("env variable MY_MONGODB_URI is not set");
  process.exit(1);
}

MongoClient.connect(dbUri)
  .then(client => {
    console.log("Connected to MongoDB");
    db = client.db('TODOListManager');
    records = db.collection('records');

    process.on('SIGINT', () => {
      console.log('Closing MongoDB connection');
      client.close()
        .then(() => {
          console.log('MongoDB connection closed');
          process.exit(0);
        })
        .catch(err => {
          console.error('Error closing MongoDB connection', err);
          process.exit(1);
        });
});


  })
  .catch(err => console.error('Error connecting to MongoDB', err));
const app = express();

const staticDirPath = path.resolve(process.cwd(), '../frontend/build/static');
console.log('STATIC DIR PATH: ' + staticDirPath);

app.use("/static", express.static(staticDirPath));

app.get("/home", (req, res) => {
	res.sendFile(
	  path.resolve(process.cwd(), '../frontend/build/index.html')
	);
});

const typeDefs = fs.readFileSync('./src/scheme.graphql',
  {encoding: 'utf8', flag: 'r'});

const list = async () => {
  return await records.find().toArray();
};

let gIndex = 0;

const createItem = async (_, {contents}) => {
  await records.insertOne({
      index: gIndex,
      contents
    });
  gIndex += 1;
  return null;
};

const readItem = async (_, {index}) => {
  return await records.findOne({index}).contents;
};

const updateItem = async (_, {index, contents}) => {
  await records.replaceOne({index}, {index, contents});
  return null;
};

const deleteItem = async (_, {index}) => {
  await records.deleteOne({index});
  return null;
};

const resolvers = {
	Query: {
		list
	},
	Mutation: {
		createItem,
		readItem,
		updateItem,
		deleteItem
	}
};

const server = new ApolloServer({typeDefs, resolvers});

server.start().then(res => {
	server.applyMiddleware({app, path: "/api"});
	app.listen(8080, () => console.log("Server started (port: 8080)."));
});

