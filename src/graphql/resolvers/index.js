require('isomorphic-fetch');

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

module.exports = {projects, project};