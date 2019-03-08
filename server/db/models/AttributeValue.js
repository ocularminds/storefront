'use strict';
const Sequelize = require('sequelize');

module.exports = (database) => {
	const Attribute = require('./Attribute')(database);
	const AttributeValue = database.define('attribute_value', {
	  id :{type: Sequelize.INTEGER, allowNull  : false,  primaryKey: true, autoIncrement: true, field: 'attribute_value_id'},
	  value    :{type: Sequelize.STRING(100),   allowNull: false},
	}, {timestamps: false, tableName: 'attribute_value', engine: 'MyISAM'});

	Attribute.hasMany(AttributeValue, {unique: 'idx_attribute_value_attribute_id'});
    AttributeValue.belongsTo(Attribute, {
		foreignKey: {
			name: 'attribute_id',
			fieldName: 'attributeId',
			allowNull: false
	    }
    });
	return AttributeValue;
}