const Area = require('../models').Area;

module.exports = {
  create(req, res) {
    return Area
      .create({
        area_name: req.body.area_name,
        regionId: req.body.regionId
      })
      .then(area => res.status(201).send(area))
      .catch(error => res.status(400).send(error));
  },
};