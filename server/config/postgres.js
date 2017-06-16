'use strict'

const defaults = {
  user: '[change-this-you-fool]', // env var: PGUSER
  database: '[change-this-you-fool]', // env var: PGDATABASE
  password: '[change-this-you-fool]', // env var: PGPASSWORD
  host: '[change-this-you-fool]', // Server hosting the postgres database
  port: 5432, // env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

module.exports = Object.assign(defaults, {
}[process.env.NODE_ENV])
