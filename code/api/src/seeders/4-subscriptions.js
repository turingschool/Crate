'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subscriptions', [
      {
        userId: 2,
        crateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      },
      {
        userId: 1,
        crateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      },
      {
        userId: 2,
        crateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subscriptions', null, {});
  }
}
