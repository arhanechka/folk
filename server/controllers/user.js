const User = require('../models').User;

module.exports = {
  create(req, res) {
    return User
      .create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    email: req.body.email,
    admin: false
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};