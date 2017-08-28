
const projectsRepo = {
  getProject: (name, id = null) => {
    return projectsCollection.filter(item => {
      if (id) return item.id === id;
      else if (name) return item.name === name;
    });
  },
  getAllProjects: () => {
    return projectsCollection;
  }
}

const projectsCollection = [
  {
    id: 1,
    name: 'NRP Surveys',
    team: {
      name: 'Nursing Team',
      lead: 'Shujaat',
      qa: ['Mamata'],
      developers: ['Joe', 'Farhan', 'Shujaat', 'Todd']
    }
  },
  {
    id: 2,
    name: 'Website Redesign',
    team: {
      name: 'Web Team',
      lead: 'Chris',
      qa: ['Shabina', 'Rachna'],
      developers: ['Andrew', 'Chris', 'Mahender', 'Shankar']
    }
  },
  {
    id: 3,
    name: 'CDB',
    team: {
      name: 'CDB Team',
      lead: 'Shujaat',
      qa: 'Mamata',
      developers: ['Joe', 'Farhan', 'Shujaat', 'Todd']
    }
  }
];

module.exports = {
  projectsRepo
}