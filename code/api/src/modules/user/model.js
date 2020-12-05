'use strict'

// User database model
// Currently, a User has a name, email, password, and role
// May add a survey attribute, where a survey belongs to a User
// One to one? Or one to many? We will need to think about if a User completes just one survey that applies to all product categories, or if there is a separate survey for each product category 
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
