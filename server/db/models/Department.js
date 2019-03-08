const Sequelize = require('sequelize');

module.exports = (database) => {
	const Department = database.define('department', {
	  id			:{type: Sequelize.INTEGER, allowNull  : false,  primaryKey: true, autoIncrement: true, field: 'department_id'},
	  name			: Sequelize.STRING(100),
	  description	: Sequelize.STRING(1000),
	}, {timestamps: false, tableName: 'department', engine: 'MyISAM'});
	return Department;
}