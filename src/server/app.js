const app = require('express')();
const graphql = require('graphql');
const GraphQLHTTP = require('express-graphql');
const resolvers = require('../graphql/resolvers');
const query = require('../graphql/types/query');

const schema = graphql.buildSchema(query);

app.use('/graphql', GraphQLHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers
  })
);

module.exports = app;