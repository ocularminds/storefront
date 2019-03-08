const http = require('http');
const epilogue = require('epilogue');
const app = require('./app');
const database = require('./db/Db');

epilogue.initialize({ app, sequelize: database });
require('./services/OrderService')(epilogue, database);
require('./services/ProductService')(epilogue, database);

const port = process.env.SERVER_PORT || 3001;

database.sync().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
module.exports = app;