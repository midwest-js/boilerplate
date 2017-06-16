'use strict'

/*
 * The main file that sets up the Express instance and node
 *
 * @module server/server
 * @type {Express instance}
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// modules > native
const p = require('path')

const projectRoot = p.dirname(__dirname)

if (process.env.NODE_ENV === 'development') {
  // output filename in console log and colour console.dir
  require('console-filename')
  // needed so symlinked modules get access to main projects node_modules/
  require('app-module-path').addPath(p.join(projectRoot, 'node_modules'))
}

// modules > 3rd party
const chalk = require('chalk')
const express = require('express')
const requireDir = require('require-dir')

// modules > express middlewares
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')

// modules > midwest
const colorizeStack = require('colorize-stack')

// highlight project files in stack
process.on('uncaughtException', (err) => {
  console.error(chalk.red('UNCAUGHT EXCEPTION'))
  if (err.stack) {
    console.error(colorizeStack(err.stack))
  } else {
    console.error(err)
  }
  process.exit(1)
})

express.response.render = require('./render')
const server = express()

// get IP & whatnot from nginx proxy
server.set('trust proxy', true)

const config = requireDir('./config', { camelcase: true })
const emitter = require('./emitter')
const db = require('./db')
const state = { config, db, emitter }

Object.assign(server.locals, {
  site: config.site,
})

try {
  server.locals.js = require(p.join(projectRoot, 'public/js.json'))
} catch (e) {}

try {
  server.locals.css = require(p.join(projectRoot, 'public/css.json'))
} catch (e) {}

if (process.env.NODE_ENV === 'development') {
  // only log requests to console in development mode
  server.use(require('morgan')('dev'))
}

server.use([
  express.static(config.dir.static, process.env.NODE_ENV === 'production' ? { maxAge: '1 year' } : null),
  require('midwest/middleware/ensure-found-static'),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cookieParser(),
  session(config.session),
])

server.use(require('./routers/index')(state))

// routes > authentication
// server.use('/api', require('./routers/api')(state))
// server.use('/auth', require('./routers/auth')(state))

// load all postwares
server.use([
  require('midwest/middleware/ensure-found'),
  // transform and log error
  require('midwest/factories/error-handler')(config.errorHandler),
  // respond
  require('midwest/middleware/responder'),
])

// Only start Express server when it is the main module (ie not required by test)
if (!module.parent) {
  server.http = server.listen(config.port, () => {
    console.info(`[${chalk.cyan('INIT')}] HTTP Server listening on port ${chalk.magenta(config.port)} (${chalk.yellow(process.env.NODE_ENV)})`)
  })
}

module.exports = server
