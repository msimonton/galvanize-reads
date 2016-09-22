// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'postgres',
    connection:'galvanize-reads'
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
