exports.up = function(knex, Promise) {
  return knex.schema.createTable("countries", function(table) {
    table.increments().primary();
    table.string("name");
    table
      .integer("reg_id")
      .unsigned()
      .references("id")
      .inTable("regions");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("countries");
};
