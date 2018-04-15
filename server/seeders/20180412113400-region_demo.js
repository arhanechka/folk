'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Regions', [
        {
        region_name: 'Krim'
      },
      {
        region_name: 'Vinnitska'
      },
      {
        region_name: 'Volinska'
      },
      {
        region_name: 'Dnipropetrovska'
      },
      {
        region_name: 'Donetska'
      },
      {
        region_name: 'Zhitomirska'
      },
      {
        region_name: 'Zakarpatska'
      },
      {
        region_name: 'Zaporizka'
      },
      {
        region_name: 'Ivano-Frankivska'
      },
      {
        region_name: 'Kyivska'
      },
      {
        region_name: 'Kirovogradska'
      },
      {
        region_name: 'Luganska'
      },
      {
        region_name: 'Lvivska'
      },
      {
        region_name: 'Mikolayivska'
      },
      {
        region_name: 'Odeska'
      },
      {
        region_name: 'Poltavska'
      },
      {
        region_name: 'Rivnenska'
      }, {
        region_name: 'Sumska'
      },
      {
        region_name: 'Ternopilska'
      },
      {
        region_name: 'Harkivska'
      },
      {
        region_name: 'Hersonska'
      },
      {
        region_name: 'Hmelnitska'
      },
      {
        region_name: 'Cherkaska'
      },
      {
        region_name: 'Chernivetska'
      },
      {
        region_name: 'Chernigivska'
      },
      {
        region_name: 'Kyiv'
      }
  ]);
   
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Regions', null, {});
    
  }
};
