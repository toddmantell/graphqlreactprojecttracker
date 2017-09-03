export const projectsTemplate = `
  {
    projects {
      id
      name
      team {
        lead
        qa
        developers
      }
    }
  }
`;

export const project = name => `
{
  project(name: ${name}) {
    id
    name
    team {
      lead
      qa
      developers
    }
  }
}
`;