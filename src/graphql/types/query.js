const interfaces = require('./interfaces');
const Project = require('./Project');
const Team = require('./Team');

const query = interfaces + Project + Team + `
  type Query {
    projects(name: String): [Project]
  }
`;

module.exports = query;