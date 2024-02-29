const express = require('express');
const {ApolloServer} = require('apollo-server-express');


const app = express();

app.use("/static", express.static(
	"/home/boss/dev/TODOListManager/frontend/build/static"));
app.get("/home", (req, res) => {
	res.sendFile("/home/boss/dev/TODOListManager/frontend/build/index.html");
});

const typeDefs = `
type Query {
  list: [Item!]!
}

input InputItem {
  id: Int!
  contents: String!
}

type Mutation {
  createItem(item: InputItem): Item!
  readItem(id: Int!): String!
  updateItem(item: InputItem): Item!
  deleteItem(id: Int!): Int!
}

type Item {
  id: Int!
  contents: String!
}
`;

const db = [];

const list = () => {
	return db;
};

const createItem = (_, {item}) => {
	db.push(item);
	return item;
};

const readItem = (_, {id}) => {
	return {id, contents:"helllo msg, gql works!"};
};

const updateItem = (_, {item}) => {
	return item;
};

const deleteItem = (_, {id}) => {
	return id;
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
