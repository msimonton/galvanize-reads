'use strict'
// const environment= process.env.NODE_ENV || "development";
// const config = require('../knexfile')[environment];
// const knex = require('knex')(config);
// module.exports = knex;


const knex = require('knex')
const config = require('../knexfile.js');
const env = process.env.NODE_ENV || 'development'

let pg = knex(config[env]);

module.exports = pg
