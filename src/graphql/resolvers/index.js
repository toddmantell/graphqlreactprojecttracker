require('isomorphic-fetch');
const _omit = require('lodash/omit');

const fetchOptions = {
  method: 'GET', 
  mode: 'cors', 
  headers: {"Content-Type": "application/json", "Accept": "application/json"}
};

const project = async (graphqlParams) => {
  const response = await fetch(`http://localhost:4000/projects/${graphqlParams.id}`, fetchOptions);

  const project = await response.json();

  return project;
};

const projects = () => {
  return getAllProjects(fetchOptions) || [];
};

const createProject = async (team) => {
  const postFetch = {..._omit(fetchOptions, 'method'), method: 'POST', body: team};
  
  const response = await fetch('http://localhost:4000/projects', postFetch);

  const data = await response.json();

  return data;
}

async function getAllProjects (fetchOptions) {
  try {
    const response = await fetch('http://localhost:4000/projects', fetchOptions);
    
    const projects = await response.json();
    
    return projects;
  }
  catch(error) {
    console.log('error:', error.message);
  }
}

module.exports = {projects, project, createProject};