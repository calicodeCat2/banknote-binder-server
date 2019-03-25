const knex = require('../db/knex');
const secret = require('../secret');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

module.exports = {
    loginUser: (req, res) => {
        if (!req.body.email || !req.body.password) {
            res.sendStatus(400)
        } else {
            knex('users')
            .where('email', req.body.email)
            .then(user => {
                if (!user.length) {
                    res.sendStatus(400)
                } else {
                    let user = user[0];
                    bcrypt.compare(req.body.password, user.password, (err, isOkay) => {
                        if (err) console.log('err')
                        if (isOkay) {
                            let {password, ...safeUser} = user
                            jwt.sign(safeUser, secret, (err, token) => {
                                res.json({
                                    user: safeUser,
                                    token
                                })
                            })
                        } else {
                            res.sendStatus(400)
                        }
                    })
                }
            })
        }
    },
    signUp: (req, res) => {
        if (!req.body.email || !req.body.password) {
            res.sendStatus(400)
        } else {
            knex('users')
            .where('email', req.body.email)
            .then(result => {
                let { email, password} = req.body
                if (!result.length) {
                    bcrypt.hash(password, null, null, function(err, hashWord){
                        knex('users')
                        .insert({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: req.body.password,
                        })
                        .then(newUser => {
                            res.sendStatus(200)
                        })
                    })
                } else {
                    res.sendStatus(400)
                }
            })
        }
    }
}