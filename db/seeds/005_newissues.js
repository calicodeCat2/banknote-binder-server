exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("newissues")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("newissues").insert([
        {
          country: "Algeria",
          denomination: 500,
          currency: "Dinars",
          issue_date: "2018-11-01",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Algeria-New-500Dinars-2018-11-01.jpg",
          comments: null
        },
        {
          country: "Algeria",
          denomination: 1000,
          currency: "Dinars",
          issue_date: "2018-12-01",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Algeria-New-1000Dinars-2018-12-01.jpg",
          comments: null
        },
        {
          country: "Guinea",
          denomination: 20000,
          currency: "Francs",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Guinea-New-20000Francs-2018.jpg",
          comments: null
        },
        {
          country: "Libya",
          denomination: 1,
          currency: "Dinar",
          issue_date: "2019-02-18",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Libya-New-1Dinar-2019-02-18.jpg",
          comments: null
        },
        {
          country: "Switzerland",
          denomination: 1000,
          currency: "Francs",
          issue_date: "2019-02-18",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Switzerland-New-1000Francs-2017.jpg",
          comments: null
        },
        {
          country: "Uzbekistan",
          denomination: 10000,
          currency: "Som",
          issue_date: "2019-02-18",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/Uzbekistan-New-100000Som-2019.jpg",
          comments: null
        },
        {
          country: "West African States (Guinea-Bissau)",
          denomination: 500,
          currency: "Francs",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WAS-GuineaBissau-919s-500Francs-2018.jpg",
          comments: null
        },
        {
          country: "West African States (Mali)",
          denomination: 1000,
          currency: "Francs",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WAS-Mali-919d-500Francs-2018.jpg",
          comments: null
        },
        {
          country: "West African States (Mali)",
          denomination: 2000,
          currency: "Francs",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WAS-Mali-916d-2000Francs-2018.jpg",
          comments: null
        },
        {
          country: "West African States (Mali)",
          denomination: 500,
          currency: "Francs",
          issue_date: "2018",
          img_url:
            "https://s3-us-west-2.amazonaws.com/note-collect-1/WAS-Mali-915d-1000Francs-2018.jpg",
          comments: null
        }
      ]);
    });
};
