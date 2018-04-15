'use strict';
module.exports = (sequelize, DataTypes) => {
  var Genre = sequelize.define('Genre', {
    genre_title: DataTypes.STRING
  }, {  timestamps: false
  });
  Genre.associate = (models) => {
     Genre.belongsTo(models.Composition, {
      foreignKey: 'genreId',
      onDelete: 'CASCADE',
    });
  };
  return Genre;
};