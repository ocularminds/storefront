'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const ShippingRegion = database.define('shipping_region', {
	  id				 :{type: Sequelize.INTEGER, allowNull  : false,  primaryKey: true, autoIncrement: true, field: 'shipping_region_id'},
	  shipping_region    :{type: Sequelize.STRING(100),   allowNull: false},
	}, {timestamps: false, tableName: 'shipping_region', engine: 'MyISAM'});
	return ShippingRegion;
}