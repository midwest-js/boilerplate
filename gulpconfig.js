'use strict'

// modules > native
module.exports = {
  babel: {
    src: 'client/**/*.{js,jsx}',
    dest: 'build',
    babelrc: false,
    presets: ['es2015-node6', 'es2016', 'es2017', 'stage-0'],
    plugins: [
      'add-module-exports',
      ['transform-react-jsx'],
      ['transform-react-remove-prop-types'],
      ['module-resolver', {
        alias: {
          lowline: 'lodash',
          'easy-tz': 'easy-tz/cjs',
          'mini-qs': 'querystring',
        },
      }],
    ],
  },

  rollup: {
    plugins: {
      babel: {
        include: [
          'node_modules/mini-qs/**',
          'node_modules/easy-path/**',
          'node_modules/comkit/**',
          'node_modules/comkit-preact/**',
          'node_modules/preact/**',
          'client/**',
        ],
        babelrc: false,
        presets: ['es2015-rollup', 'es2016', 'es2017', 'stage-0'],
        plugins: [
          ['transform-react-jsx', { pragma: 'h' }],
        ],
      },
    },
    entries: [
      'admin/index.jsx',
      'public/index.jsx',
    ],
    outputs: [
      'admin.js',
      'public.js',
    ],
  },
}
