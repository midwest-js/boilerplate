'use strict'

const basePort = 9020

module.exports = {
  development: basePort,
  testing: basePort + 1,
  staging: basePort + 2,
  production: basePort + 3,
}[process.env.NODE_ENV]
