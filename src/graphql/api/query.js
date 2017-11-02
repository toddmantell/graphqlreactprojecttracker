const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
 } = require('graphql');
 const {projects, project} = require('../resolvers');

 module.exports = new GraphQLObjectType({
   name: 'QueryType',
   description: 'The root query type',
   fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: projects
    },
    project: {
      type: ProjectType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      }
    }
   }
 });