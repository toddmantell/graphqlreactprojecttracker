import merge from 'lodash/merge';
import * as queries from './queryTemplates';

const basicFetchOptions = {method: 'POST', headers: {'Content-Type': 'application/graphql'}};

export async function getProjects() {
  const fetchOptionsWithQuery = merge({}, basicFetchOptions, {body: queries.projectsTemplate});

  try {
    const result = await fetch('http://localhost:8888/graphql', fetchOptionsWithQuery);
    
    const parsedData = await result.json();
    console.log('parsedData in data service', parsedData);

    return parsedData;
    
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function getProject(name) {
  const projectQuery = queries.project(name);

  const fetchOptionsWithQuery = merge({}, basicFetchOptions, {body: projectQuery});

  const result = await fetch('http://localhost:8888/graphql', fetchOptionsWithQuery);

  const parsedData = await result.json();

  return parsedData;
}