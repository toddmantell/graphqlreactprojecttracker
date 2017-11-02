const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

const projectType = new GraphQLObjectType({
  name: 'Project',
  description: 'The projects that our developers work on',
  fields: {
    name: {
      type: GraphQLString,
      description: 'The name of the project'
    },
    team: {
      type: new GraphQLObjectType(teamType),//need to define the Team type
      description: 'The team that worked/works on this project'
    }
  }
});