'use strict';
module.exports = (sequelize, DataTypes) => {
  var Region = sequelize.define('Region', {
    region_name: DataTypes.STRING
  }, {});
  Region.associate = function(models) {
    Region.belongsTo(models.Area, {
      foreignKey: 'regionId',
      onDelete: 'CASCADE',
    });
  };
  return Region;
};