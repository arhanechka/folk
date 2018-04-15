const Locality = require('../models').Locality;

module.exports = {
  create(req, res) {
    return Locality
      .create({
        locality_name: req.body.locality_name,
        regionId: req.body.regionId,
        areaId: req.body.areaId
      })
      .then(locality => res.status(201).send(locality))
      .catch(error => res.status(400).send(error));
  },
};