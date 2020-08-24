'use strict'

// This is the model for crate - the styles table may be similar to the User 

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // The style model would have a different relationship to style preferences 
  // How the tables associate with each other. 

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}