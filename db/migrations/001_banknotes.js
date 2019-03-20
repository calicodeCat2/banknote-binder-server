exports.up = function(knex, Promise) {
    return knex.schema.createTable('banknotes', function(table) {
        table.increments().primary();
        table.string('region')
        table.string('country');
        table.string('catalog_no');
        table.integer('denomination');
        table.string('currency');
        table.string('issue_date');
        table.enum('grade', ['UNC', 'AU', 'EF', 'VF', 'F', 'VG', 'G', 'Fair', 'P']).defaultTo('UNC');
        table.string('img_url');
        table.timestamps(true, true);
    })  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('banknotes')
  
};