// Update with your config settings.
const config = require("../config");

module.exports = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    database: "fantano",
    password: "postgres"
  },
  pool: {
    min: 2,
    max: 10
  },
  port: 5432,
  migrations: {
    tableName: "knex_migrations",
    directory: "./migrations"
  }
};
