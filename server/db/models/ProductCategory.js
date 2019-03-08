const Sequelize = require('sequelize');

module.exports = (database) => {
	const ProductCategory = database.define('product_category', {
	}, {timestamps: false, tableName: 'product_category', engine: 'MyISAM'});
	return ProductCategory;
}