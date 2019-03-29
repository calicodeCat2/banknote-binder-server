exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("countries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("countries").insert([
        {
          name: "Angola",
          reg_id: 1
        },
        {
          name: "Argentina",
          reg_id: 8
        },
        {
          name: "Armenia",
          reg_id: 5
        },
        {
          name: "Barbados",
          reg_id: 3
        },
        {
          name: "Belize",
          reg_id: 4
        },
        {
          name: "Bermuda",
          reg_id: 7
        },
        {
          name: "Burundi",
          reg_id: 1
        },
        {
          name: "CapeVerde",
          reg_id: 1
        },
        {
          name: "Central African States (Congo)",
          reg_id: 1
        },
        {
          name: "Colombia",
          reg_id: 8
        },
        {
          name: "Comoros",
          reg_id: 1
        },
        {
          name: "Dominican Republic",
          reg_id: 3
        },
        {
          name: "Egypt",
          reg_id: 6
        },
        {
          name: "Ethiopia",
          reg_id: 1
        },
        {
          name: "Fiji",
          reg_id: 9
        },
        {
          name: "Georgia",
          reg_id: 5
        },
        {
          name: "Guatemala",
          reg_id: 4
        },
        {
          name: "Haiti",
          reg_id: 3
        },
        {
          name: "Hong Kong (BOC)",
          reg_id: 2
        },
        {
          name: "India",
          reg_id: 2
        },
        {
          name: "Jamaica",
          reg_id: 3
        },
        {
          name: "Kazakhstan",
          reg_id: 2
        },
        {
          name: "Kenya",
          reg_id: 1
        },
        {
          name: "Kyrgyzstan",
          reg_id: 2
        },
        {
          name: "Liberia",
          reg_id: 1
        },
        {
          name: "Macedonia",
          reg_id: 5
        },
        {
          name: "Madagascar",
          reg_id: 1
        },
        {
          name: "Moldova",
          reg_id: 5
        },
        {
          name: "Nepal",
          reg_id: 2
        },
        {
          name: "New Zealand",
          reg_id: 9
        },
        {
          name: "Pakistan",
          reg_id: 2
        },
        {
          name: "Papua New Guinea",
          reg_id: 9
        },
        {
          name: "Philippines",
          reg_id: 2
        },
        {
          name: "Rwanda",
          reg_id: 1
        },
        {
          name: "Samoa",
          reg_id: 9
        },
        {
          name: "Saudi Arabia",
          reg_id: 6
        },
        {
          name: "Serbia",
          reg_id: 5
        },
        {
          name: "Seychelles",
          reg_id: 1
        },
        {
          name: "Sri Lanka",
          reg_id: 2
        },
        {
          name: "Syria",
          reg_id: 6
        },
        {
          name: "Tanzania",
          reg_id: 1
        },
        {
          name: "Trinidad",
          reg_id: 3
        },
        {
          name: "Turkmenistan",
          reg_id: 2
        },
        {
          name: "Uganda",
          reg_id: 1
        },
        {
          name: "Ukraine",
          reg_id: 5
        },
        {
          name: "Venezuela",
          reg_id: 8
        },
        {
          name: "West African States (Togo)",
          reg_id: 1
        },
        {
          name: "Zambia",
          reg_id: 1
        },
        {
          name: "Zimbabwe",
          reg_id: 1
        }
      ]);
    });
};
