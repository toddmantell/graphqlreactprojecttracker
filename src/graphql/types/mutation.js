const Team = require('./Team');

const mutation = `
  input TeamInput {
    name: String
    lead: String
    qa: [String]
    developers: [String]
  }

  type Mutation {
    createProject(name: String, team: TeamInput) : Int
    updateProject(id: Int, name: String, team: TeamInput): Int
  }
`;

module.exports = mutation;