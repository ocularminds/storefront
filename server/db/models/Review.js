'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Customer = require('./Customer')(database);
	const Product = require('./Product')(database);
	const Review = database.define('review', {
	  id		  :{type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, field: 'review_id'},
	  review      :{type: Sequelize.TEXT, allowNull: false},
	  rating      :{type: Sequelize.INTEGER, allowNull: false},
	  created_on  :{type: Sequelize.DATE, allowNull: false},
	}, {timestamps: false, tableName: 'review', engine: 'MyISAM'});

	Review.belongsTo(Customer, {
		foreignKey: {
			name: 'customer_id',
			fieldName: 'customerId'
	    }
    });

	Product.hasOne(Customer, {
		foreignKey: {
			name: 'product_id',
			fieldName: 'productId'
	    }
    });
    Customer.hasMany(Review, { onDelete: 'CASCADE' });

   return Review;
};