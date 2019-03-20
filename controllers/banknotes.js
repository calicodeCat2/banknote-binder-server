const knex = require("../db/knex.js");

module.exports = {

    getBanknotes: (req, res) => {
      knex('banknotes')
        .orderBy('country', 'asc')
        .then(banknotes => res.json(banknotes))
    },

    getBanknote: (req, res) => {
      knex('banknotes')
      .where('id', req.params.id)
      .then(banknote => res.json(banknote))
    },

    // She's a NO FLUSH
    getBanknotesByCountry: (req, res) => {
        knex('banknotes')
        .then(data => res.json(data))
      let banknotes = JSON.parse(data)
      let notesByCountry = banknotes.filter(banknote => banknote.country)
      console.log(notesByCountry);
      if(notesByCountry == req.params.country) {
        res.json(notesByCountry)
      }
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

      filterByCountry: (req, res) => {
        knex.select('countries').from('banknotes')
        .then(countries)
        let countryArray = JSON.parse(countries)
        // console.log(banknotes);
        // let countries = (banknotes.map(banknote => banknote.country))
        // var uniqueCountries = countries.filter(function(item, index){
        //   return countries.indexOf(item) >= index;
        // });
        // console.log(uniqueCountries);
        res.send(countryArray)
      }



  }