const knex = require("../db/knex.js");

module.exports = {

    root: (req, res) => {
      res.send("Hello");
    },

  }