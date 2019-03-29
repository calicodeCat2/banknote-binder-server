const knex = require("../db/knex.js");

module.exports = {
  registerUser: (req, res) => {
    
    knex('users')
    .insert({
      first_name: req.body.newuser.first_name,
      last_name: req.body.newuser.last_name,
      email: req.body.newuser.email,
      password: req.body.newuser.password,
    })
    .returning('*')
    .then(newuser => res.json(newuser))
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

  addToCollection: (req, res) => {
    knex("collections")
    .insert({
      user_id: req.body.user_id,
      note_id: req.body.note_id,
      in_collection: true,
      in_wantlist: false
    })
    .returning("*")
    .then(collectionAddition => res.json(collectionAddition));
  },

  editCollection: (req, res) => {
    knex("collections")
    .where('id', req.params)
    .update(req.body)
    .returning("*")
    .then(data => res.json(data));
  },

  addToWantList: (req, res) => {
    knex("collections")
    .insert({
      user_id: req.body.user_id,
      note_id: req.body.note_id,
      in_collection: false,
      in_wantlist: true
    })
    .returning("*")
    .then(wantlistAddition => res.json(wantlistAddition));
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
