// Update with your config settings.
var dotenv=require('dotenv').config();
module.exports = {

  development: {
    client: 'postgres',
    connection:{
      database:'greads'
    }
  },

  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
