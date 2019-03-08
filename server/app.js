
require('dotenv').config({ path: '.env.local' });
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const epilogue = require('epilogue');
const OktaJwtVerifier = require('@okta/jwt-verifier');
const express = require('express');
const cors = require('cors');
const app = express();

/*const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
});*/

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to Turing TShirt Shop.',
}));

/*
app.use(async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('Authorization header is required');

    const accessToken = req.headers.authorization.trim().split(' ')[1];
    await oktaJwtVerifier.verifyAccessToken(accessToken);
    next();
  } catch (error) {
    next(error.message);
  }
});*/

module.exports = app;