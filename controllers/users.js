const knex = require("../db/knex.js");

module.exports = {
  registerUser: (req, res) => {
    knex('users')
    .insert({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    .returning('*')
    .then('newuser'),
    function (err) {
      if (err) return res.status(500).send("There was a problem with registration")
    }
  },
  loginUser: (req, res) => {
    knex("users")
      .where("email", req.body.email)
      .then(user => res.json(user));
  },

  getUsers: (req, res) => {
    knex("users")
    .then(users => res.json(users));
  },

  getUser: (req, res) => {
    knex("users")
      .where("users.id", req.params.id)
      .then(user => res.json(user));
  },
  getUserCollection: (req, res) => {
    knex("users")
      .where("users.id", req.params.id)
      .join("collections", "users.id", "=", "user_id")
      .join("banknotes", "note_id", "=", "banknotes.id")
      .join("countries", "ctry_id", "=", "countries.id")
      .join("regions", "reg_id", "=", "regions.id")
      .then(user => res.json(user));
  },
  getAllCollections: (req, res) => {
    knex("regions")
      .join("countries", "id", "=", "region_id")
      .join("banknotes", "countries.id", "=", "ctry_id")
      .join("collections", "banknotes.id", "=", "note_id")
      .join("users", "collections.id", "=", "users_id")
      .then(users => res.json(users));
  },
  addToCollection: (req, res) => {
    knex("collections")
    // .where("users.id", req.params.id)
    // .join("collections", "users.id", "=", "collections.user_id")
    .insert({
      user_id: req.body.user_id,
      note_id: req.body.note_id,
      in_collection: req.body.in_collection,
      in_wantlist: req.body.in_wantlist
    })
    .returning("*")
    .then(collectionAddition => res.json(collectionAddition));
  },

  addUser: (req, res) => {
    knex("users")
      .insert(req.body)
      .returning("*")
      .then(newuser => res.json(newuser));
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
