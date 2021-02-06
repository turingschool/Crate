'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

const jsonAddress = { "street1": "123 Cool Guy Way", "city": "Denver", "state": "CO", "zip": "80216" }


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.admin,
        image: null,
        bio: null,
        shippingAddress: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        image: 'https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg',
        bio: 'I am Tom from MySpace and I\'ve got style',
        shippingAddress: JSON.stringify(jsonAddress),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
