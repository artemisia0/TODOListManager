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

type Item {
  id: Int!
  contents: String!
}
`;

const resolvers = {
	Query: {
		list: () => {
			return [{id: 10, contents: "mymsg"}, {id: 66, contents:"hi!"}];
		}
	}
};

const server = new ApolloServer({typeDefs, resolvers});

server.start().then(res => {
	server.applyMiddleware({app, path: "/api"});
	app.listen(8080, () => console.log("Server started (port: 8080)."));
});
