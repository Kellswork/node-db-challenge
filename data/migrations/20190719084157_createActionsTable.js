exports.up = function(knex) {
    return knex.schema.createTable('actions', table => {
      table.increments();
        table.text('description').notNullable();
        table.text('notes').notNullable();
      table.boolean('completed').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.dropTableIfExists('actions');
  };
  