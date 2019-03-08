'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Orders = require('./Orders')(database);
	const Audit = database.define('audit', {
	  id		     :{type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, field: 'audit_id'},
	  created_on     :{type: Sequelize.DATE, allowNull: false},
	  message        :{type: Sequelize.TEXT, allowNull: false},
	  code           :{type: Sequelize.INTEGER, allowNull: false},
	}, {timestamps: false, tableName: 'audit', engine: 'MyISAM'});

    Audit.belongsTo(Orders,  {
		foreignKey: {
			name: 'order_id',
			fieldName: 'orderId',
			allowNull: false
	    }
    });
	return Audit;
}