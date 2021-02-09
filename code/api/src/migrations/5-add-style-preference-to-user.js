'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'style_preference', {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.STRING
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users','style_preference');
  }
};
