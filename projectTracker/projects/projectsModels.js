const db = require('../../data/dbConfig');

module.exports = {
  addProject,
  getProjects,
  getProjectId,
  getProjectActions
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

function getProjectActions(id) {
  return db('actions')
    .join('projects', 'actions.project_id', 'projects.id')
    .where({ project_id: id });
}
