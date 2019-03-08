const Sequelize = require('sequelize');


module.exports = (database) => {

    const Department = require('./Department')(database);
	const Category = database.define('category', {
	  id		    :{type: Sequelize.INTEGER, allowNull  : false,  primaryKey: true, autoIncrement: true, field: 'category_id'},
	  name			: Sequelize.STRING(100),
	  description	: Sequelize.STRING(1000),
	}, {timestamps: false, tableName: 'category', engine: 'MyISAM'});
	Category.belongsTo(Department, {
		foreignKey: {
			name: 'department_id',
			fieldName: 'departmentId',
			allowNull: false
	    }
    });
	return Category;
}