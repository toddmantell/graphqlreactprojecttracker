const app = require('express')();
const graphql = require('graphql');
const GraphQLHTTP = require('express-graphql');
const resolvers = require('../graphql/resolvers');
//const query = require('../graphql/types/query');

const cors = require('cors');

const combinedSchema = require('../graphql/types/schema');//need to combine the query with the mutation
const schema = graphql.buildSchema(combinedSchema);

app.options('*', cors());

//This is needed because express-graphql does not support cors and Access-Control-Allow-Origin
app.use('/graphql', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/graphql', GraphQLHTTP({
  schema,
  graphiql: true,
  rootValue: resolvers
  })
);

module.exports = app;