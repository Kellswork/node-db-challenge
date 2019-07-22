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

function projectAction(id) {
return db('actions').select('id', 'description', 'notes', 'completed').where('project_id', id )
}

async function getProjectActions(id) {
  const project = await getProjectId(id).first();
  project.action = await projectAction(project.id);
  return project;
}
