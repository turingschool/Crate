'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('crates', [
      {
        name: 'Clothes for Men',
        description: 'A monthly supply of trendy clothes for men.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes for Women',
        description: 'A monthly supply of trendy clothes for women.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accessories for Men',
        description: 'A monthly supply of trendy accessories for men',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Accessories for Women',
        description: 'A monthly supply of trendy accessories for women',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes and Accessories for Men',
        description: 'A monthly supply of trendy clothes and accessories for men',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothes and Accessories for Women',
        description: 'A monthly supply of trendy clothes and accessories for women',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('crates', null, {});
  }
}




{
  name: 'Gothic pants - Black',
  slug: 'pants-for-men-blac',
  description: 'Black pants with chains.',
  type: params.product.types.cloth.id,
  gender: params.user.gender.male.id,
  image: 'https://www.thedarkattitude.com/image/cache/products/men%20gothic%20pant/007/018-700x700.jpg',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  name: 'Gothic pants - Black',
  slug: 'pants-for-men-blac',
  description: 'Black pants with chains.',
  type: params.product.types.cloth.id,
  gender: params.user.gender.male.id,
  image: 'https://www.thedarkattitude.com/image/cache/products/men%20gothic%20pant/007/018-700x700.jpg',
  createdAt: new Date(),
  updatedAt: new Date()
},
