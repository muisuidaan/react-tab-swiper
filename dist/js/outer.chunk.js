webpackJsonp([4],{

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _NavLink = __webpack_require__(238);

var _NavLink2 = _interopRequireDefault(_NavLink);

var _config = __webpack_require__(241);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLeftNav(data, pId) {
  if (!data) {
    return;
  }
  var navData = data.filter(function (item, index) {
    return item && parseInt(item['pId']) === parseInt(pId);
  });
  if (navData) {
    return navData[0].modules;
  }
} /**
   *
   * @authors Your Name (you@example.org)
   * @date    2017-08-16 14:29:59
   * @version $Id$
   */


function TabLeft(props) {
  //let {data} = props;
  var pId = props.params['pId'],
      navData = getLeftNav(_config2.default, pId);
  return _react2.default.createElement(
    'div',
    { className: 'contentOuter' },
    _react2.default.createElement(
      'ul',
      { className: 'leftTab' },
      navData && navData.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index,
            className: 'tab' },
          _react2.default.createElement(
            _NavLink2.default,
            { to: '/main/' + props.params['pId'] + '/' + item.mId },
            item.mName
          )
        );
      })
    ),
    props.children
  );
}

exports.default = TabLeft;

/***/ })

});