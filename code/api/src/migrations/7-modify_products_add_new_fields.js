'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'products', // table name
        'orderStatus', // new field name
        {
          type: Sequelize.TEXT,
          defaultValue: 'kept'
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('products', 'orderStatus'),
    ]);
  },
};
