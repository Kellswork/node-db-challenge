exports.up = function(knex) {
  return knex.schema.createTable('projects', table => {
    table.increments();
    table.text('name').notNullable();
    table.text('description').notNullable();
    table.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.dropTableIfExists('projects');
};
