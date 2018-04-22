const Sequelize = require('sequelize');
var sequelize = require('../config/db')

    var Area = sequelize.define('Area', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true, 
            autoIncrement: true 
          },
          area_name: {
            type: Sequelize.STRING
        }
    }, {});
    Area.associate = function(models) {
      Area.hasMany(models.Region, {
        foreignKey: 'regionId',
        onDelete: 'CASCADE',
      });
    };
   
    module.exports = Area;
  