require('isomorphic-fetch');

const fetchOptions = {
  method: 'GET', 
  mode: 'cors', 
  headers: {"Content-Type": "application/json", "Accept": "application/json"}
};

const project = async (nameObject) => {
  const projects = await getProjects(fetchOptions);

  const project = projects.filter(project => project.name === nameObject.name)[0];

  return project;
};

const projects = () => {
  return getProjects(fetchOptions) || [];
};

async function getProjects (fetchOptions) {
  try {
    const response = await fetch('http://localhost:4000/projects', fetchOptions);
    
    const projects = await response.json();
    
    return projects;
  }
  catch(error) {
    console.log('error:', error.message);
  }
}

module.exports = {projects, project};