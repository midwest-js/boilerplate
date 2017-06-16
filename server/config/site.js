'use strict'

const _ = require('lodash')

const domain = '[cange-this-you-fool]'

const port = process.env.PORT || require('./port')

const defaults = {
  domain,
  title: '[cange-this-you-fool]',
  name: '[cange-this-you-fool]',
  protocol: 'http',
  websocketsPort: port + 5,
  get host () {
    return this.port ? `${this.hostname}:${this.port}` : this.hostname
  },
  get url () {
    return `${this.protocol}://${this.host}/`
  },
  emails: {
    robot: `no-reply@bitmill.co`,
    info: 'info@bitmill.co',
    webmaster: 'webmaster@bitmill.co',
    order: 'info@bitmill.co',
  },
}

module.exports = _.merge(defaults, {
  development: {
    hostname: 'localhost',
    port: process.env.EXTERNAL_PORT || port,
  },

  testing: {
    hostname: 'localhost',
    port,
  },

  staging: {
    hostname: `staging.${domain}`,
  },

  production: {
    hostname: `${domain}`,
    protocol: 'https',
    emails: {
      robot: `no-reply@${domain}`,
      info: `info@${domain}`,
      webmaster: `webmaster@${domain}`,
      order: `order@${domain}`,
    },
  },
}[process.env.NODE_ENV])
