const {projectsRepo} = require('../../server/repository');

const project = (nameObject) => {
  const project = projectsRepo.getProject(nameObject.name);

  return project;
};

const projects = () => {
  return projectsRepo.getAllProjects();
};

module.exports = {projects, project};