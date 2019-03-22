
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
    .then(function () {
      // Inserts seed entries
      return knex('collections').insert([
        {
          note_id: 3,
          user_id: 3,
          in_collection: true,
          in_wantlist: false,
        },
        {
          note_id: 98,
          user_id: 3,
          in_collection: false,
          in_wantlist: true,
        },
        {
          note_id: 195,
          user_id: 3,
          in_collection: true,
          in_wantlist: false,
        },
        {
          note_id: 207,
          user_id: 3,
          in_collection: false,
          in_wantlist: true,
        },
      ]);
    });
};
