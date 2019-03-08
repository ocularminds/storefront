const Sequelize = require('sequelize');

module.exports = (database) => {
	const Product = require('./Product')(database);
	const ShoppingCart = database.define('shopping_cart', {
	  id	      :{type: Sequelize.INTEGER, allowNull: false,  primaryKey: true, autoIncrement: true, field: 'item_id'},
	  cart_id     :{type: Sequelize.STRING(32), allowNull: false, unique: 'idx_shopping_cart_cart_id'},
	  attributez  :{type: Sequelize.STRING(1000), allowNull: false, field: 'attributes'},
	  quantity    :{type: Sequelize.INTEGER, allowNull: false},
	  buy_now     :{type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true},
	  added_on    :{type: Sequelize.DATE, allowNull: false},
	}, {timestamps: false, tableName: 'shopping_cart', engine: 'MyISAM'});

	ShoppingCart.belongsTo(Product, {
		foreignKey: {
			name: 'product_id',
			fieldName: 'productId'
	    }
    });
	return ShoppingCart;
}