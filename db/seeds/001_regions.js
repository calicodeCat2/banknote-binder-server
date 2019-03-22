exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("regions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("regions").insert([
        {
          region_name: "Africa"
        },
        {
          region_name: "Asia"
        },
        {
          region_name: "Caribbean"
        },
        {
          region_name: "Central America"
        },
        {
          region_name: "Europe"
        },
        {
          region_name: "Middle East"
        },
        {
          region_name: "North America"
        },
        {
          region_name: "South America"
        },
        {
          region_name: "South Pacific"
        }
      ]);
    });
};
