'use strict';
module.exports = (sequelize, DataTypes) => {
  var Area = sequelize.define('Area', {
    area_name: DataTypes.STRING
  }, {});
  Area.associate = function(models) {
    Area.hasMany(models.Region, {
      foreignKey: 'regionId',
      onDelete: 'CASCADE',
    });
  };
  return Area;
};