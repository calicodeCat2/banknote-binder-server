exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          first_name: "Javi",
          last_name: "Blake",
          email: "blake@test.com",
          password: "12345678",
        },
        {
          first_name: "Wally",
          last_name: "Myers",
          email: "myers@test.com",
          password: "12345678",
        },
        {
          first_name: "Brian",
          last_name: "Evans",
          email: "evans@test.com",
          password: "12345678",
        },
        {
          first_name: "Peter",
          last_name: "Last",
          email: "last@test.com",
          password: "12345678",
        }
      ]);
    });
};
