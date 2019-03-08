'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Attribute = database.define('attribute', {
	  id :{type: Sequelize.INTEGER, allowNull  : false,  primaryKey: true, autoIncrement: true, field: 'attribute_id'},
	  name         :{type: Sequelize.STRING(100),   allowNull: false},
	}, {timestamps: false, tableName: 'attribute', engine: 'MyISAM'});

	return Attribute;
}