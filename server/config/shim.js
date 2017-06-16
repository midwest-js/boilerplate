'use strict'

module.exports = {
  shims: {
    'https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js': [
      'chrome <= 12',
      'firefox <= 20',
      'ie <= 9',
      'opera <= 12',
      'safari <= 5',
    ],
    'https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js': [
      'chrome <= 51',
      'edge <= 13',
      'firefox <= 44',
      'ie <= 11',
      'safari <= 9',
    ],
    'https://unpkg.com/es7-shim@latest/dist/es7-shim.min.js': [
      'chrome <= 50',
      'edge <= 14',
      'firefox <= 46',
      'ie <= 11',
      'safari <= 10',
    ],
    'https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js': [
      'chrome <= 41',
      'edge <= 13',
      'firefox <= 38',
      'ie <= 11',
      'safari <= 9',
    ],
  },
}
