const Composition = require('../models').Composition;

module.exports = {
  create(req, res) {
    return Composition
      .create({
        composition_title: req.body.composition_title,
        vocal_instr: req.body.vocal_instr,
        keyword: req.body.keyword,
        link: req.body.link,
        audio_video: req.body.audio_video,
        areaId: req.body.areaId,
        regionId: req.body.regionId,
        localityId: req.body.localityId,
        genreId: req.body.genreId,
        userId: req.body.userId
        
      })
      .then(composition => res.status(201).send(composition))
      .catch(error => res.status(400).send(error));
  },
};