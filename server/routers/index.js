'use strict'

const express = require('express')

const _ = require('lodash')

const master = require('../templates/public')

const Layout = require('../../build/public/components/Layout')
const Component01 = require('../../build/public/components/Component01')
const Component02 = require('../../build/public/components/Component02')
const Index = require('../../build/public/components/pages/Index')
const Page01 = require('../../build/public/components/pages/Page01')

module.exports = _.memoize((state) => {
  const router = new express.Router()
  // const pages = require('../pages/index')(state);

  // const mw = {
  //   regions: require('midwest-service-regions/middleware')({ db: state.db, emitter: state.emitter }),
  //   setLocation: require('midwest/middleware/set-location'),
  //   cache: require('midwest/factories/cache'),
  //   bootstrap: require('midwest/factories/bootstrap')(),
  //   // contact: require('../services/contact/middleware'),
  //   shim: require('midwest/factories/shim')(require('../config/shim')),
  //   assignResponse: require('midwest/factories/assign-response')({
  //     locals: { pages },
  //     props: { master, template: App, preventFlatten: true },
  //   }),
  // };

  router.get('/', (req, res, next) => {
    res.preventFlatten = true

    res.master = master

    res.templates = [
      Layout,
      [ Component01, Index, Component02 ],
    ]

    res.locals.text = 'what'

    next()
  })

  router.get('/page01', (req, res, next) => {
    console.log('ehloo')
    res.preventFlatten = true

    res.master = master

    res.template = Page01
    res.locals.text = 'what again'

    next()
  })

  return router
})
