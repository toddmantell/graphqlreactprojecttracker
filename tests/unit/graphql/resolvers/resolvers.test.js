const {project, projects} = require('../../../../src/graphql/resolvers');

test('get project should get a project by name', () => {
  const result = project("NRP Surveys");

  expect(result.length).toBe(1);
});

test('get projects should get all projects', () => {
  const result = projects();

  expect(result.length).toBe(3);
});