// import express from 'express'

const express = require('express')
var { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

const { ApolloServer, gql } = require('apollo-server-express')

// const server = express()


const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);


// server.use('/graphiql',graphqlExpress({
//     endpointURL:"/graphql"
// }))

// server.get('/graphql',(req,res)=>{
//     res.send("<html>Hello world</html>")
// })



// server.listen(3000, ()=>{
//     console.log("listen port 3000")
// })