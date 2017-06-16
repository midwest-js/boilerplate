'use strict'

const React = require('react')
const ReactDOMServer = require('react-dom/server')

module.exports = function (Master, ...Components) {
  const locals = Object.assign({}, this.app.locals, this.locals)

  let html

  if (this.cache) {
    html = this.cache.html
  }

  console.log(Components)
  if (!html && Components.length) {
    const dom = Components.reverse().reduce((result, Component) => {
      if (Array.isArray(Component)) {
        return Component.map((Component) => React.createElement(Component, locals, result))
      }

      return React.createElement(Component, locals, result)
    }, null)
    console.log(dom)

    html = ReactDOMServer.renderToString(dom)

    if (this.cache) this.cache.html = html
  }

  // always render master, since shim mw will add
  // scripts depending on user agent string
  if (typeof Master === 'function') {
    html = Master(Object.assign({ html }, locals))
  }

  this.send(html)
}
