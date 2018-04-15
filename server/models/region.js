'use strict';
module.exports = (sequelize, DataTypes) => {
  var Region = sequelize.define('Region', {
    region_name: DataTypes.STRING
  }, {  timestamps: false
  });
  Region.associate = function(models) {
    Region.belongsTo(models.Composition, {
      foreignKey: 'regionId',
      onDelete: 'CASCADE',
    });
  };
  return Region;
};