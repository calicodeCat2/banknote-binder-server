exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("collections")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("collections").insert([
        {
          note_id: 3,
          user_id: 3,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 98,
          user_id: 3,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 195,
          user_id: 3,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 136,
          user_id: 3,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 67,
          user_id: 3,
          grade: "AU",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 247,
          user_id: 3,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 186,
          user_id: 3,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 210,
          user_id: 3,
          grade: "VG",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 193,
          user_id: 3,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 182,
          user_id: 3,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 122,
          user_id: 3,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 89,
          user_id: 3,
          grade: "EF",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 89,
          user_id: 1,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 159,
          user_id: 1,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 163,
          user_id: 1,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 76,
          user_id: 1,
          grade: "VG",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 246,
          user_id: 1,
          grade: "UNC",
          in_collection: false,
          in_wantlist: true
        },
        {
          note_id: 168,
          user_id: 1,
          grade: "AU",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 201,
          user_id: 1,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 139,
          user_id: 1,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
        {
          note_id: 128,
          user_id: 1,
          grade: "UNC",
          in_collection: true,
          in_wantlist: false
        },
      ]);
    });
};
