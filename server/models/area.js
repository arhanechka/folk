'use strict';
module.exports = (sequelize, DataTypes) => {
  var Area = sequelize.define('Area', {
    area_name: DataTypes.STRING
  }, {
    timestamps: false
  });
  Area.associate = (models) => {
  
      Area.hasMany(models.Region, {
        foreignKey: 'regionId'
      });
  };
  return Area;
};