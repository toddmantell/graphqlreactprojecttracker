const {projectsRepo} = require('../../server/repository');

const project = (name) => {
  return projectsRepo.getProject(name);
};

const projects = () => {
  return projectsRepo.getAllProjects();
};

module.exports = {projects, project};