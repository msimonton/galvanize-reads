// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'postgres',
    connection:{
      database:'greads'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'galvanize-reads',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
