'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'users',
        'stylePreferences',
    {
      type: Sequelize.STRING,
      default: null
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'users',
        'stylePreferences'
    )}
};

