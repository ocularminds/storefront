'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Orders = database.define('orders', {
	  id	       :{type: Sequelize.INTEGER, allowNull: false,  primaryKey: true, autoIncrement: true, field: 'order_id'},
	  total_amount :{type: Sequelize.DECIMAL(10,2),   allowNull: false, defaultValue: 0.00},
	  created_on   :{type: Sequelize.DATE,allowNull: false},
	  shipped_on   :{type: Sequelize.DATE},
	  status       :{type: Sequelize.INTEGER, allowNull: false, defaultValue: 0},
	  comments     :{type: Sequelize.STRING(255)},
	  customer_id  :{type: Sequelize.INTEGER, unique: 'idx_orders_customer_id'},
	  auth_code    :{type: Sequelize.STRING(50)},
	  reference    :{type: Sequelize.STRING(50)},
	  shipping_id  :{type: Sequelize.INTEGER, unique: 'idx_orders_shipping_id'},
	  tax_id       :{type: Sequelize.INTEGER, unique: 'idx_orders_tax_id'},
	}, {timestamps: false, tableName: 'orders', engine: 'MyISAM'});
	return Orders;
}