'use strict';
const Memcached = require('memcached')
const memcached = new Memcached('localhost:11211')

const MemcachedAdaptor = require('sequelize-transparent-cache-memcached')
const memcachedAdaptor = new MemcachedAdaptor({
  client: memcached,
  namespace: 'model',
  lifetime: 60 * 60
})

const sequelizeCache = require('sequelize-transparent-cache')
const { classMethods, instanceMethods } = sequelizeCache(memcachedAdaptor)
const Sequelize = require('sequelize');

const database = new Sequelize('tshirtshop', 'root','pass',{
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 3000,
		idle: 10000
	},
	operatorsAliases:false,
	define: { classMethods, instanceMethods }
});

module.exports = database;


