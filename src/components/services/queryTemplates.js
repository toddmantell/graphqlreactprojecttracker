export const projectsTemplate = `
  {
    projects {
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
    name
    team {
      lead
      qa
      developers
    }
  }
}
`;