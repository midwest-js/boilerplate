'use strict'

const h = require('hyperscript-jsx/string')

module.exports = ({ site, js, css, html }) => (
  '<!doctype html>' +
  h('html', { lang: 'sv' },
    h('head', null,
      h('title', null, (site && site.title) || 'Untitled Website' + ' Error'),
      h('meta', { charset: 'utf-8' }),
      h('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }),
      h('meta', { name: 'author', content: 'Linus Miller' }),
      h('link', { type: 'text/css', rel: 'stylesheet', href: `/css/admin${css ? css.suffix : ''}.css` })
    ),
    h('body', null,
      html
    )
  )
)
