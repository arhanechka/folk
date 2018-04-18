const Genre = require('../models').Genre;

module.exports = {
  create(req, res) {
    return Genre
      .create({
        genre_title: req.body.genre_title,
      })
      .then(genre => res.status(201).send(genre))
      .catch(error => res.status(400).send(error));
  },
};