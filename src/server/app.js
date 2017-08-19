const app = require('express')();
const graphql = require('graphql');
const GraphQLHTTP = require('express-graphql');
const resolvers = require('../graphql/resolvers');


app.use('/graphql', GraphQLHTTP({
  schema: {},
  graphiql: true,
  rootValue: resolvers
  })
);

module.exports = app;