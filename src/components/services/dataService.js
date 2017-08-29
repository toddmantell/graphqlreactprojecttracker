import * as templates from './queryTemplates';

export async function getProjects() {
  const result = await fetch('http://localhost:8888/graphql', templates.projectsTemplate);
  const parsedData = await result.json();

  return parsedData;
}