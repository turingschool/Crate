'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subscriptions', [
      {
        userId: 2,
<<<<<<< HEAD
        crateId: 2,
=======
        crateId: 1,
>>>>>>> c76c03d... Update seeders with the correct information
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      },
      {
<<<<<<< HEAD
        userId: 1,
        crateId: 2,
=======
        userId: 2,
        crateId: 3,
>>>>>>> c76c03d... Update seeders with the correct information
        createdAt: new Date(),
        updatedAt: new Date(),
        deliveryDate: new Date()
      },
      {
<<<<<<< HEAD
        userId: 2,
        crateId: 1,
=======
        userId: 1,
        crateId: 2,
>>>>>>> c76c03d... Update seeders with the correct information
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
