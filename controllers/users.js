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
      .select(['banknotes.id as banknote_id', 'banknotes.catalog_no', 'banknotes.denomination',
      'banknotes.currency', 'banknotes.issue_date', 'banknotes.img_url', 'banknotes.ctry_id', 
       'regions.id as region_id', 'regions.region_name', 'countries.id as countries_id',
        'countries.name', 'countries.reg_id', 'users.first_name', 'users.last_name', 'users.id as users_id',
        'collections.user_id', 'collections.note_id', 'collections.in_collection', 'collections.in_wantlist', 
        'collections.id', 'collections.grade'])
      .then(user => res.json(user));
  },

  // getUserCollection: (req, res) => {
  //   knex('collections')
  //   .join('users', 'users.id as users_id')
  //   .join('banknotes', 'banknotes.id as banknotes_id')
  //   .join('countries', 'countries.id as countries_id')
  //   .join('regions', 'regions.id as regions_id')
  //   .then(collecion => res.json(collection))
  // },

  addToCollection: (req, res) => {
    knex("collections")
    .insert({
      user_id: req.body.user_id,
      note_id: req.body.note_id,
      grade: req.body.grade,
      in_collection: true,
      in_wantlist: false
    })
    .returning("*")
    .then(collectionAddition => res.json(collectionAddition));
  },

  editCollection: (req, res) => {
    knex("collections")
    .where('id', req.params.id)
    .update({
      note_id: req.body.note_id,
      user_id: req.body.user_id,
      grade: req.body.grade,
      in_collection: req.body.in_collection,
      in_wantlist: req.body.in_wantlist,

    })
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
