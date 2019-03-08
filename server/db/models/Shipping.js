'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Shipping = database.define('shipping', {
	  id		         :{type: Sequelize.INTEGER,  allowNull: false, primaryKey: true, autoIncrement: true, field: 'shipping_id'},
	  shipping_type      :{type: Sequelize.STRING(100),     allowNull: false},
	  shipping_cost      :{type: Sequelize.DOUBLE(10, 2),   allowNull: false},
	  shipping_region_id :{type: Sequelize.INTEGER,  allowNull: false, unique: 'idx_shipping_shipping_region_id'},
	}, {timestamps: false, tableName: 'shipping', engine: 'MyISAM'});
	return Shipping;
}