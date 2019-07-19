exports.up = function(knex) {
    return knex.schema.createTable('tracker', table => {
      table.increments();
        table.text('project_id').notNullable();
        table.text('action_id').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.dropTableIfExists('tracker');
  };
  