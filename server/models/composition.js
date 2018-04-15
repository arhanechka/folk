'use strict';
module.exports = (sequelize, DataTypes) => {
  var Composition = sequelize.define('Composition', {
    composition_title: DataTypes.STRING,
    vocal_instr: DataTypes.BOOLEAN,
    keyword: DataTypes.STRING,
    link: DataTypes.STRING,
    audio_video: DataTypes.BOOLEAN,
  }, {});
  Composition.associate = function(models) {
    Composition.hasMany(models.Area, {
      foreignKey: 'areaId'
    });
    Composition.hasMany(models.Region, {
      foreignKey: 'regionId'
    });
    Composition.hasMany(models.Locality, {
      foreignKey: 'localityId'
    });
    Composition.hasMany(models.Genre, {
      foreignKey: 'genreId'
    });
    Composition.hasMany(models.User, {
      foreignKey: 'userId'
    });
  };
  return Composition;
};