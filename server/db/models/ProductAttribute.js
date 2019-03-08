'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const ProductAttribute = database.define('product_attribute', {
	}, {timestamps: false, tableName: 'product_attribute', engine: 'MyISAM'});
	return ProductAttribute;
}