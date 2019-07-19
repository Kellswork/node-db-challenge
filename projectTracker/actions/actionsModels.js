const db = require('../../data/dbConfig');

module.exports = {
  getactions,
  getActionId,
  addAction
};

function getactions() {
  return db('actions');
}

function getActionId(id) {
  return db('actions').where({ id });
}

function addAction(action) {
  return db('actions')
    .insert(action)
    .then(ids => getActionId(ids[0]));
}
