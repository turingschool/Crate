'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crateProducts', [
      {
        productId: 2,
        crateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        productId: 3,
        crateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        productId: 1,
        crateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),

      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crateProducts', null, {});
  }
}
