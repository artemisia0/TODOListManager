const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const fs = require('fs');


const app = express();

app.use("/static", express.static(
	"/home/boss/dev/TODOListManager/frontend/build/static"));

app.get("/home", (req, res) => {
	res.sendFile("/home/boss/dev/TODOListManager/frontend/build/index.html");
});

const typeDefs = fs.readFileSync('./src/scheme.graphql',
  {encoding: 'utf8', flag: 'r'});

let db = [];

const list = () => {
  let result = [];
  for (let i = 0; i < db.length; i++) {
    result.push({index: i, contents: db[i]});
  }
  return result;
};

const createItem = (_, {contents}) => {
  db.push(contents);
  return contents;
};

const readItem = (_, {index}) => {
  return db[index];
};

const updateItem = (_, {index, contents}) => {
  db[index] = contents;
};

const deleteItem = (_, {index}) => {
  const contents = db[index];
  db[index] = null;
  return contents;
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
