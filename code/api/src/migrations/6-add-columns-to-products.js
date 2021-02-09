'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("products", "style", {
      allowNull: false,
      defaultValue: "unspecified",
      type: Sequelize.STRING
      }
    ),
      queryInterface.addColumn("products", "sub_type", {
      allowNull: false,
      defaultValue: "unspecified",
      type: Sequelize.STRING
      }
    ),
      queryInterface.addColumn("products", "survey", {
      defaultValue: false,
      type: Sequelize.BOOLEAN
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("products", "style"),
           queryInterface.removeColumn("products", "sub_type"),
           queryInterface.removeColumn("products", "survey");
  }
};
