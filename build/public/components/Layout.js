'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ({ children }) => _react2.default.createElement(
  'div',
  { id: 'app' },
  _react2.default.createElement(
    'div',
    { 'class': 'header' },
    'Header',
    children[0]
  ),
  _react2.default.createElement(
    'nav',
    null,
    _react2.default.createElement(
      'ul',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'a',
          { href: '/test' },
          'Test'
        )
      )
    )
  ),
  _react2.default.createElement(
    'main',
    null,
    children[1]
  ),
  _react2.default.createElement(
    'div',
    { className: 'footer' },
    'Footer',
    children[2]
  )
);

module.exports = exports['default'];