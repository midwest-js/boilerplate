'use strict'

const _ = require('lodash')

const errorTemplate = require('../templates/error')

const defaults = {
  post: (req, res, next) => {
    res.master = errorTemplate

    next()
  },

  mystify: {
    properties: ['errors', 'message', 'name', 'status', 'statusText'],
  },

  log: {
    // if database = true there has to be a mongoose model name ErrorModel
    ignore: [],
  },
}

const store = require('midwest-service-errors/stores/postgres')

module.exports = _.merge(defaults, {
  development: {
    log: {
      store,
      console: true,
    },
  },
  testing: {
    log: {
      // store: false,
      console: false,
    },
  },
  staging: {
    log: {
      // store,
      console: false,
    },
  },
  production: {
    log: {
      // store,
      console: false,
    },
  },
}[process.env.NODE_ENV])
