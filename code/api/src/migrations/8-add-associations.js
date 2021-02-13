'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'products', // name of Source model
      'crateId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'crates', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Products', // name of Source model
      'crateId' // key we want to remove
    );
  }
};
