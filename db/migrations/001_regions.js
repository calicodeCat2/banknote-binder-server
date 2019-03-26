exports.up = function(knex, Promise) {
  return knex.schema.createTable("regions", function(table) {
    table.increments().primary();
    table.string("region_name");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {};
