import _merge from 'lodash/merge';
import * as queries from './queryTemplates';
import 'isomorphic-fetch';

const basicFetchOptions = {method: 'POST', headers: {'Content-Type': 'application/graphql'}};

export async function getProjects() {
  const fetchOptionsWithQuery = _merge({}, basicFetchOptions, {body: queries.projectsTemplate});

  try {
    const result = await fetch('http://localhost:8888/graphql', fetchOptionsWithQuery);
    
    const parsedData = await result.json();

    return parsedData;
    
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function getProject(id) {
  const projectQuery = queries.project(id);

  const fetchOptionsWithQuery = _merge({}, basicFetchOptions, {body: projectQuery});

  const result = await fetch('http://localhost:8888/graphql', fetchOptionsWithQuery);

  const parsedData = await result.json();

  return parsedData;
}