const knex = require("../db/knex.js");

module.exports = {
  registerUser: (req, res) => {
    res.send({
      message: `User ${req.body.email} Registered`
    });
  },
  loginUser: (req, res) => {
    knex("users")
      .where("email", req.body.email)
      .then(results => {
        let user = results[0];
    
      });
  },
  getUsers: (req, res) => {
    knex("users").then(users => res.json(users));
  },

  getUser: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .then(user => res.json(user));
  },
  addUser: (req, res) => {
    knex("users")
      .insert(req.body)
      .returning("*")
      .then(newUser => res.json(newUser));
  },
  updateUser: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .update(req.body)
      .returning("*")
      .then(updatedUser => res.json(updatedUser));
  },

  deleteUser: (req, res) => {
    knex("users")
      .where("id", req.params.id)
      .del()
      .returning("*")
      .then(deletedUser => res.json(deletedUser));
  }
};
