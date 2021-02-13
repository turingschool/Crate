'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'subscriptions',
        'deliveryDate',
        {
          type: Sequelize.DATE,
          allowNull: true
        }
      )
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('subscriptions', 'deliveryDate')
    ])
  }
};
