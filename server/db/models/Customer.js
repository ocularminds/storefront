'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const ShippingRegion = require('./ShippingRegion')(database);
	const Customer = database.define('customer', {
	  id		         :{type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true,field: 'customer_id'},
	  name               :{type: Sequelize.STRING(50),     allowNull: false},
	  email              :{type: Sequelize.STRING(100),    allowNull: false, unique: 'idx_customer_email'},
	  password           :{type: Sequelize.STRING(50),     allowNull: false},
	  credit_card        :{type: Sequelize.TEXT},
	  address_1          :{type: Sequelize.STRING(100)},
	  address_2          :{type: Sequelize.STRING(100)},
	  city               :{type: Sequelize.STRING(100)},
	  region             :{type: Sequelize.STRING(100)},
	  postal_code        :{type: Sequelize.STRING(100)},
	  country            :{type: Sequelize.STRING(100)},
	  day_phone          :{type: Sequelize.STRING(100)},
	  eve_phone          :{type: Sequelize.STRING(100)},
	  mob_phone          :{type: Sequelize.STRING(100)},
	}, {timestamps: false, tableName: 'customer', engine: 'MyISAM'});

	Customer.belongsTo(ShippingRegion, {
		foreignKey: {
			name: 'shipping_region_id',
			fieldName: 'shippingRegionId',
			allowNull: false,
			defaultValue: 1
	    }
    });
	return Customer;
}