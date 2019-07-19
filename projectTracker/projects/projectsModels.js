const db = require('../../data/dbConfig');

module.exports = {
    addProject, getProjects, getProjectId
};

function getProjects() {
  return db('projects');
}

function getProjectId(id) {
  return db('projects').where({ id });
}

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(ids => getProjectId(ids[0]));
}

