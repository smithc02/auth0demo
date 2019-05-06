webpackHotUpdate("static/development/pages/index.js",{

/***/ "./static/template.js":
/*!****************************!*\
  !*** ./static/template.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _static_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/auth */ "./static/auth.js");









var _jsxFileName = "/Users/calebsupport/ssr/nextssr/static/template.js";


 //this page checks whether a token existed 

/* harmony default export */ __webpack_exports__["default"] = (function (Page) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Template, _React$Component);

      function Template() {
        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Template);

        return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Template).apply(this, arguments));
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Template, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Page, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          })));
        }
      }], [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
            var req, loggedInUser, pageProperties;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    req = _ref.req;

                    if (false) {}

                    _context.next = 4;
                    return Object(_static_auth__WEBPACK_IMPORTED_MODULE_11__["getTokenForBrowser"])();

                  case 4:
                    _context.t0 = _context.sent;
                    _context.next = 10;
                    break;

                  case 7:
                    _context.next = 9;
                    return Object(_static_auth__WEBPACK_IMPORTED_MODULE_11__["getTokenForServer"])(req);

                  case 9:
                    _context.t0 = _context.sent;

                  case 10:
                    loggedInUser = _context.t0;
                    _context.next = 13;
                    return Page.getInitialProps;

                  case 13:
                    _context.t1 = _context.sent;

                    if (!_context.t1) {
                      _context.next = 18;
                      break;
                    }

                    _context.next = 17;
                    return Page.getInitialProps(req);

                  case 17:
                    _context.t1 = _context.sent;

                  case 18:
                    pageProperties = _context.t1;
                    return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProperties, {
                      loggedInUser: loggedInUser,
                      isLoggedIn: !!loggedInUser
                    }));

                  case 20:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      return Template;
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)
  );
});

/***/ })

})
//# sourceMappingURL=index.js.89630130f55a2674a6ee.hot-update.js.map