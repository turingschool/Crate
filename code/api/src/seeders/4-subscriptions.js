'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subscriptions', [
      {
        userId: 5,
        crateId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      },
      {
        userId: 5,
        crateId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      },
      {
        userId: 6,
        crateId: 20,
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
