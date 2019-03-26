exports.up = function(knex, Promise) {
  return knex.schema.createTable("collections", function(table) {
    table.increments().primary();
    table
      .integer("note_id")
      .unsigned()
      .references("id")
      .inTable("banknotes");
    table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users");
    table.boolean("in_collection").defaultTo(false);
    table.boolean("in_wantlist").defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("collections");
};
