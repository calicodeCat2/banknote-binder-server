exports.up = function(knex, Promise) {
  return knex.schema.createTable("newissues", function(table) {
    table.increments().primary();
    table.string("country");
    table.integer("denomination");
    table.string("currency");
    table.string("issue_date");
    table.string("img_url");
    table.string("comments");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("newissues");
};
