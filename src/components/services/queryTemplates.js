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

export const project = id => `
{
  project(name: ${id}) {
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