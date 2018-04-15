'use strict';
module.exports = (sequelize, DataTypes) => {
  var Locality = sequelize.define('Locality', {
    locality_name: DataTypes.STRING
  }, {  timestamps: false
  });
  Locality.associate = function(models) {
    Locality.belongsTo(models.Composition, {
      foreignKey: 'localityId',
      onDelete: 'CASCADE',
    });
    Locality.hasMany(models.Area);
    Locality.hasMany(models.Region);
  };
  return Locality;
};