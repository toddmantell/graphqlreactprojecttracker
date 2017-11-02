const Project = require('./Project');

const mutation = `
  input TeamInput {
    name: String
    lead: String
    qa: [String]
    developers: [String]
  }

  type Mutation {
    createProject(name: String, team: TeamInput) : Project
    updateProject(id: Int, name: String, team: TeamInput): Project
  }
`;

module.exports = mutation;