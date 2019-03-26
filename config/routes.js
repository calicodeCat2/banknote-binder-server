const express = require("express");

const index = require("../controllers/index.js");
const banknotes = require("../controllers/banknotes.js");
const users = require("../controllers/users.js");

module.exports = function(app) {
 
  app.get("/index", index.root);

  // Banknote Table Routes
  app.get("/banknotes", banknotes.getBanknotes);
  app.post("/banknotes/addbanknote", banknotes.addBankote);
  app.patch("/banknotes/updatebanknote/:id", banknotes.updateBanknote);
  app.delete("/banknotes/deletebanknote/:id", banknotes.deleteBanknote);
  app.get("/banknotes/countries", banknotes.getCountries)
  app.get("/banknotes/countries/:id", banknotes.getCountry);
  app.get("/banknotes/:id", banknotes.getBanknote);
  app.get("/banknotes/random", banknotes.getRandom);
  app.get("/regions", banknotes.getRegions);
  app.get("/regions/:id", banknotes.getRegion);
  app.get("/regions/countries/:id", banknotes.getCountriesbyRegion);
  app.get("/newissues", banknotes.getNewIssues);
  app.get("/newissues/:id", banknotes.getOneNewIssue);
  app.post("/newissues/addnewissue", banknotes.addNewIssue);
  app.patch("/newissues/updatenewissue/:id", banknotes.updateNewIssue);
  app.delete("/newissues/deletenewissue/:id", banknotes.deleteNewIssue);

  // User Table Routes
  app.post("/users/login", users.loginUser);
  app.post("/users/register", users.registerUser);
  app.get("/users", users.getUsers);
  app.get("/users/:id", users.getUser);
  app.get("/users/collection/:id", users.getUserCollection);
  app.get("/users/collections", users.getAllCollections);
  app.post("/users/collections/addnote/:id", users.addToCollection);
  app.post("/users/adduser", users.addUser);
  app.patch("/users/updateuser/:id", users.updateUser);
  app.delete("/users/deleteuser/:id", users.deleteUser);


  // Collection Table Routes
};

