module.exports = (epilogue, database) => {
	const Orders = require('../db/models/Orders')(database);
	const OrderDetail = require('../db/models/OrderDetail')(database);
	const Shipping = require('../db/models/Shipping')(database);
	const ShippingRegion = require('../db/models/ShippingRegion')(database);
    const ShoppingCart = require('../db/models/ShoppingCart')(database);

	epilogue.resource({model: Orders,
	  endpoints: ['/api/orders', '/api/orders/:id'],
	});

	epilogue.resource({
	  model: OrderDetail,
	  endpoints: ['/api/order/detail', '/api/order/detail/:id'],
	});

	epilogue.resource({
	  model: Shipping,
	  endpoints: ['/api/shipping', '/api/shipping/:id'],
	});

	epilogue.resource({
	  model: ShippingRegion,
	  endpoints: ['/api/shippings/regions', '/api/shippings/regions/:id'],
	});

	epilogue.resource({
	  model: ShoppingCart,
	  endpoints: ['/api/shopping/cart', '/api/shopping/cart/:id'],
	});
}