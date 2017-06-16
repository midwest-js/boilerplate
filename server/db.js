'use strict'

const factory = require('easy-postgres')
const config = require('./config/postgres')

module.exports = factory(config)
