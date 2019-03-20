const express = require("express");

const index = require("../controllers/index.js");
const banknotes = require("../controllers/banknotes.js");
const users = require("../controllers/users.js");

module.exports = function(app) {
 
  app.get("/index", index.root);

  // Banknote Table Routes
  app.get("/banknotes", banknotes.getBanknotes);
  app.get("/banknotes/:id", banknotes.getBanknote);
  app.get("/banknotes/:country", banknotes.getBanknotesByCountry);
  app.post("/banknotes/addbanknote", banknotes.addBankote);
  app.patch("/banknotes/updatebanknote/:id", banknotes.updateBanknote);
  app.delete("/banknotes/deletebanknote/:id", banknotes.deleteBanknote);
  app.get("/notes/filter", banknotes.filterByCountry);

  // User Table Routes
  app.get("/users", users.getUsers);
  app.get("/users/:id", users.getUser);
  app.post("/users/adduser", users.addUser);
  app.patch("/users/updateuser/:id", users.updateUser);
  app.delete("/users/deleteuser/:id", users.deleteUser);


  // Collection Table Routes
};

