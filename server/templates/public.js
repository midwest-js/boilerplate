'use strict'

const h = require('hyperscript-jsx/string')

module.exports = ({ html, scripts, site, js, css, children }) => (
  '<!doctype html>' +
  h('html', { lang: 'sv' },
    h('head', null,
      h('title', null, (site && site.title) || 'Untitled Website'),
      h('meta', { charset: 'utf-8' }),
      h('meta', { name: 'viewport', content: 'width=device-width,initial-scale=1' }),
      h('meta', { name: 'robots', content: 'index, follow' }),
      h('link', { type: 'text/css', rel: 'stylesheet', href: `/css/public${css ? css.suffix : ''}.css` })
    ),
    h('body', { vocab: 'http://schema.org' },
      html,
      scripts && scripts.map(script => h('script', { src: script })),
      h('script', { src: `/js/public${js ? js.suffix : ''}.js` })
    )
  )
)
