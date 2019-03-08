const Sequelize = require('sequelize');

module.exports = (database) => {
	const AttributeValue = require('./AttributeValue')(database);
	const Category = require('./Category')(database);
	const ProductAttribute = require('./ProductAttribute')(database);
	const ProductCategory = require('./ProductCategory')(database);

	const Product = database.define('product', {
	  id     			:{type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true,field: 'product_id'},
	  name				:{type: Sequelize.STRING(100), unique: 'idx_prod_name'},
	  description		:{type: Sequelize.STRING(1000)},
	  price 			:{type: Sequelize.DECIMAL(10, 2), allowNull: false},
	  discounted_price	:{type: Sequelize.DECIMAL(10, 2), allowNull: false , defaultValue: 0.00},
	  image				:Sequelize.STRING(150),
	  image_2			:Sequelize.STRING(150),
	  thumbnail			:Sequelize.STRING(150),
	  display			:{type: Sequelize.INTEGER, defaultValue: 0},
	}, {timestamps: false, tableName: 'product', engine: 'MyISAM'});

	Category.belongsToMany(Product, {through: ProductCategory,foreignKey: {
		name: 'product_id',
		fieldName: 'productId'
	}});
    Product.belongsToMany(Category, {through: ProductCategory,foreignKey: {
		name: 'category_id',
		fieldName: 'categoryId'
	}});

    AttributeValue.belongsToMany(Product, {through: ProductAttribute, foreignKey: {
		name: 'product_id',
		fieldName: 'productId'
	}});
    Product.belongsToMany(AttributeValue, {through: ProductAttribute, foreignKey: {
		name: 'attribute_value_id',
		fieldName: 'attributeValueId'
	}});
	return Product;
}