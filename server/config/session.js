'use strict'

const chalk = require('chalk')
const session = require('express-session')

let redisStore

const config = {
  secret: '[cange-this-you-fool]',
  resave: false,
  saveUninitialized: true,
}

const redisConfig = {
  host: 'localhost',
  port: 6379,
}

if (process.env.NODE_ENV === 'production') {
  const RedisStore = require('connect-redis')(require('express-session'))

  redisStore = new RedisStore(redisConfig)

  redisStore.on('connect', () => {
    console.info(`[${chalk.cyan('INIT')}] Redis connected succcessfully`)
  })

  redisStore.on('disconnect', () => {
    throw new Error(`[${chalk.red('ERROR')}] Unable to connect to redis. Has it been started?`)
  })

  config.store = redisStore
} else {
  config.store = new session.MemoryStore()
}

module.exports = config
