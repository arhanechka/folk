const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize ('folk', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = db;