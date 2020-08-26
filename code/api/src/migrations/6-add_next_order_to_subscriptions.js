module.exports = {
	up: function (queryInterface, Sequelize) {
  	return Promise.all([
    	queryInterface.addColumn('subscriptions', 'next_order', {
    	type: Sequelize.DATE
    	})
  	]);
	},

	down: function (queryInterface, Sequelize) {
  	return Promise.all([
      queryInterface.removeColumn('subscriptions', 'next_order')
    ]);
	}
};
