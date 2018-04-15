const genresController = require('../controllers').genre;
const areaController = require('../controllers').area;
const localityController = require('../controllers').locality;
const userController = require('../controllers').user;
const compositionController = require('../controllers').composition;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/genre', genresController.create);
  app.post('/api/area', areaController.create);
  app.post('/api/locality', localityController.create);
  app.post('/api/user', userController.create);
  app.post('/api/composition', compositionController.create);
};