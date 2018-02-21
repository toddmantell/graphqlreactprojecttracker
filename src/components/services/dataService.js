import * as queries from './queryTemplates';
import 'isomorphic-fetch';

const basicFetchOptions = {method: 'GET', headers: {'Content-Type': 'application/json'}};

export async function getProjects() {
  const fetchOptionsWithQuery = {...basicFetchOptions, body: queries.projectsTemplate};

  try {
    const result = await fetch('http://localhost:8888/graphql', fetchOptionsWithQuery);
    
    return await result.json();    
  } catch (error) {
    throw error;
  }
}

export async function getProject(id) {
  const projectQuery = queries.project(id);

  const fetchOptionsWithQuery = {...basicFetchOptions, body: projectQuery};
  
  try {
    const result = await fetch('http://localhost:8888/graphql', fetchOptionsWithQuery);

    return await result.json();
  } catch(error) {
    throw error;
  }
}
