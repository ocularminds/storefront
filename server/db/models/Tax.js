'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Tax = database.define('tax', {
	  id         	:{type: Sequelize.INTEGER,  allowNull: false,  primaryKey: true, autoIncrement: true, field: 'tax_id'},
	  tax_type       :{type: Sequelize.STRING(100),     allowNull: false},
	  tax_percentage :{type: Sequelize.DOUBLE(10, 2),   allowNull: false},
	}, {timestamps: false, tableName: 'tax', engine: 'MyISAM'});
	return Tax;
}