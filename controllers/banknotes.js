const knex = require("../db/knex.js");

module.exports = {

    getBanknotes: (req, res) => {
      knex('banknotes')
      .join('countries', 'ctry_id', '=', 'countries.id')
      .join('regions', 'reg_id', '=', 'regions.id')
        .then(banknotes => res.json(banknotes))
    },
    
    getBanknote: (req, res) => {
      knex('banknotes')
      .join('countries', 'ctry_id', '=', 'countries.id')
      .join('regions', 'reg_id', '=', 'regions.id')
      .where('banknotes.id', req.params.id)
      .then(banknote => res.json(banknote))
    },

    // She's a NO FLUSH
    getBanknotesByCountry: (req, res) => {
        knex('banknotes')
        .select('banknotes.*', 'countries.name')
        .where('countries', 'ctry_id', '=', 'countries.id')
      },

      addBankote: (req, res) => {
        knex('banknotes')
          .insert(req.body)
          .returning('*')
          .then(newNote => res.json(newNote))
      },
      updateBanknote: (req, res) => {
        knex('banknotes')
          .where('id', req.params.id)
          .update(req.body)
          .returning('*')
          .then(updatedNote => res.json(updatedNote))
      },
    
      deleteBanknote: (req, res) => {
        knex('banknotes')
          .where('id', req.params.id)
          .del()
          .returning('*')
          .then(deletedNote => res.json(deletedNote))
      },

      getCountries: (req, res) => {
        knex('countries')
        .then(countries => res.json(countries))
      },

      getCountry: (req, res) => {
        knex('countries').select('name')
        .where('id', req.params.id)
          .then(country => res.json(country))
      },

      getRegions: (req, res) => {
        knex('regions').select('region_name')
        .then(regions => res.json(regions))
      },

      getRegion: (req, res) => {
        knex('regions').select('region_name')
        .where('id', req.params.id)
          .then(region => res.json(region))
      },

      getNewIssues: (req, res) => {
        knex('newissues')
          .then(newissues => res.json(newissues))
      },

      getOneNewIssue: (req, res) => {
        knex('newissues')
        .where('id', req.params.id)
        .then(newissues => res.json(newissues))
      },

      addNewIssue: (req, res) => {
        knex('newissues')
          .insert(req.body)
          .returning('*')
          .then(newIssue => res.json(newIssue))
      },

      updateNewIssue: (req, res) => {
        knex('newissues')
          .where('id', req.params.id)
          .update(req.body)
          .returning('*')
          .then(newissue => res.json(newissue))
      },

      deleteNewIssue: (req, res) => {
        knex('newissues')
          .where('id', req.params.id)
          .del()
          .returning('*')
          .then(deletedItem => res.json(deletedItem))
      },




  }