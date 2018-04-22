const Sequelize = require('sequelize');
var sequelize = require('../config/db')
var User = sequelize.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true 
      },
    username: {
        type: Sequelize.STRING
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    salt: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    admin: {
        type: Sequelize.BOOLEAN
    },
  }, {});
//   User.associate = function(models) {
//     User.belongsTo(models.Composition, {
//       foreignKey: 'userId',
//       onDelete: 'CASCADE',
//     });
//   };

  module.exports = User;
  


