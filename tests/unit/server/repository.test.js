const {projectsRepo} = require('../../../src/server/repository');

test('get all projects should return all projects', () => {
  const result = projectsRepo.getAllProjects();

  expect(result.length).toBe(3);
});

test('getProject should return the requested project', () => {
  const expected = {"id": 1, "name": "NRP Surveys", "team": {"developers": ["Joe", "Farhan", "Shujaat", "Todd"], "lead": "Shujaat", "name": "Nursing Team"
  , "qa": ["Mamata"]}};
   
  const result = projectsRepo.getProject('NRP Surveys');

  expect(result[0]).toMatchObject(expected);
});