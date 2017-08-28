const interfaces = require('./interfaces');
const Project = require('./Project');
const Team = require('./Team');

const query = interfaces + Project + Team + `
  type Query {
    project(name: String!): Project
    projects: [Project]
  }
`;

module.exports = query;