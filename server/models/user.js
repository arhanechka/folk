'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  }, {  timestamps: false
  });
  User.associate = function(models) {
    User.belongsTo(models.Composition, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return User;
};