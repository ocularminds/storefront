const Sequelize = require('sequelize');

module.exports = (database) => {
	const Orders = require('./Orders')(database);
	const Product = require('./Product')(database);
	const OrderDetail = database.define('order_detail', {
	  id           :{type: Sequelize.INTEGER, allowNull: false,  primaryKey: true, autoIncrement: true, field: 'item_id'},
	  attributez   :{type: Sequelize.STRING(1000), allowNull: false},
	  product_name :{type: Sequelize.STRING(100),  allowNull: false},
	  quantity     :{type: Sequelize.INTEGER, allowNull: false},
	  unit_cost    :{type: Sequelize.DECIMAL(10,2),   allowNull: false},
	}, {timestamps: false, tableName: 'order_detail', engine: 'MyISAM'});

	OrderDetail.Orders = OrderDetail.belongsTo(Orders, {
		foreignKey: {
			name: 'order_id',
			fieldName: 'orderId'
	    }
    });

	Product.hasOne(OrderDetail, {
		foreignKey: {
			name: 'product_id',
			fieldName: 'productId',
			allowNull: false,
	    }
    });
	return OrderDetail;
}