'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Compositions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      composition_title: {
        type: Sequelize.STRING
      },
      vocal_instr: {
        type: Sequelize.BOOLEAN
      },
      keyword: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      audio_video: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
       type: Sequelize.DATE
      },
      updatedAt: {
       type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Compositions');
  }
};