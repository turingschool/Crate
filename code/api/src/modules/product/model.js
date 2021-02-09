// add new column fields style, gender, subtype, survey by migration
'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    },
    survey: {
      type: DataTypes.BOOLEAN
    },
    style: {
      type: DataTypes.TEXT
    },
    sub_type: {
      type: DataTypes.TEXT
    }
  })
}
