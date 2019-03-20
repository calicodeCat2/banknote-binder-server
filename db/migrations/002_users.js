exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
        table.increments().primary();
        table.string('first_name');
        table.string('last_name');
        table.string('email').unique();
        table.string('password');
        table.integer('col_num');
        table.integer('want_num');
        table.timestamps(true, true);
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  
};
