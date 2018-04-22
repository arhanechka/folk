const Sequelize = require('sequelize');
var sequelize = require('../config/db')

  var Region = sequelize.define('Region', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
      },
      region_name: {
        type: Sequelize.STRING
    }
  }, {});
  Region.associate = function(models) {
    Region.belongsTo(models.Area, {
      foreignKey: 'regionId',
      onDelete: 'CASCADE',
    });
  };


  module.exports = Region;
