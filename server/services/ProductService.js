module.exports = (epilogue, database) => {

	const Attribute = require('../db/models/Attribute')(database);
	const AttributeValue = require('../db/models/AttributeValue')(database);
	const Audit = require('../db/models/Audit')(database);
	const Category = require('../db/models/Category')(database);
	const Customer = require('../db/models/Customer')(database);
	const Department = require('../db/models/Department')(database);
	const Product = require('../db/models/Product')(database);
	const ProductAttribute = require('../db/models/ProductAttribute')(database);
	const ProductCategory = require('../db/models/ProductCategory')(database);
	const Review = require('../db/models/Review')(database);
    const Tax = require('../db/models/Tax')(database);

	epilogue.resource({model: Audit,
	  endpoints: ['/api/audits', '/api/audits/:id'],
	});

	epilogue.resource({
	  model: Attribute,
	  endpoints: ['/api/attributes', '/api/attributes/:id'],
	});

	epilogue.resource({
	  model: AttributeValue,
	  endpoints: ['/api/attribute/values', '/api/attribute/values/:id'],
	});

	epilogue.resource({
	  model: Category,
	  endpoints: ['/api/categories', '/api/categories/:id'],
	});

	epilogue.resource({
	  model: Customer,
	  endpoints: ['/api/customers', '/api/customers/:id'],
	});

	epilogue.resource({model: Department,
	  endpoints: ['/api/departments', '/api/departments/:id'],
	});

	epilogue.resource({
	  model: Product, endpoints: ['/api/products', '/api/products/:id'],
	  search: [
	        {operator: '$like', param: 'productName', attributes: [ 'name', 'description' ]},
	        {param: 'searchOnlyDepartment', attributes: [ 'username' ]}
      ]
	  });

	epilogue.resource({
		model: ProductAttribute,
		endpoints: ['/api/product/attributes', '/api/product/attributes/:id'],
	});

	epilogue.resource({model: Tax,
	    endpoints: ['/api/tax', '/api/tax/:id']
	});

	epilogue.resource({model: Review, endpoints: ['/api/reviews', '/api/reviews/:id']});
}