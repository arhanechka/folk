'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Users', [{
        username: 'arhanechka',
        firstname: 'Anna',
        lastname: 'Arkhipchuk',
        password: '1111',
        email: 'demo@demo.com',
        admin: true
      }]);
  
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');

  }
};

