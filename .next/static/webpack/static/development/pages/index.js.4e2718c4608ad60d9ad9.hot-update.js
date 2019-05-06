webpackHotUpdate("static/development/pages/index.js",{

/***/ "./static/auth.js":
/*!************************!*\
  !*** ./static/auth.js ***!
  \************************/
/*! exports provided: saveToken, deleteToken, getTokenForBrowser, getTokenForServer, verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveToken", function() { return saveToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteToken", function() { return deleteToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenForBrowser", function() { return getTokenForBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokenForServer", function() { return getTokenForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings */ "./settings.js");





 //responsbile for handling the token verification and cookie operations

function getJWK() {
  return _getJWK.apply(this, arguments);
}

function _getJWK() {
  _getJWK = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res, jwk;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://".concat(_settings__WEBPACK_IMPORTED_MODULE_5__["domain"], "/.well-known/jwks.json"));

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            jwk = _context.sent;
            return _context.abrupt("return", jwk);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getJWK.apply(this, arguments);
}

function saveToken(jwtToken, accessToken) {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('user', jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(jwtToken));
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwtToken', jwtToken);
} //when we delete token, we also remove the users cookie and remove the jwt token


function deleteToken() {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('user');
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwtToken');
} // verifying the token
// setting values: decoded token should be the decodeds jwt token with a status of true for the complete property
// jwk value awaits the getJWK() which gets a JWK token
// the cert is assigned a value according to the jwk.keys value and a combination of some other info
// then checks if the cert created matches another cert?
//then checks to see if the jwk.keys[0].kid equals the decodedToken.header.kid
// if true it verifys the jwt and returns true
//if not it returns false 


function verifyToken(_x) {
  return _verifyToken.apply(this, arguments);
} // gets a token for browser
// if we receive a valid token we then receive a cookie for the browser


function _verifyToken() {
  _verifyToken = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
    var decodedToken, jwk, cert;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!token) {
              _context2.next = 19;
              break;
            }

            decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token, {
              complete: true
            });
            _context2.next = 4;
            return getJWK();

          case 4:
            jwk = _context2.sent;
            cert = jwk.keys[0].x5c[0];
            console.log('cert', cert);
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

            if (!(jwk.keys[0].kid === decodedToken.header.kid)) {
              _context2.next = 19;
              break;
            }

            _context2.prev = 10;
            jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.verify(token, cert);
            return _context2.abrupt("return", true);

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](10);
            console.error(_context2.t0);
            return _context2.abrupt("return", false);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[10, 15]]);
  }));
  return _verifyToken.apply(this, arguments);
}

function getTokenForBrowser() {
  return _getTokenForBrowser.apply(this, arguments);
} //getting a token for the server 


function _getTokenForBrowser() {
  _getTokenForBrowser = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var token, validToken;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('jwtToken');
            _context3.next = 3;
            return verifyToken(token);

          case 3:
            validToken = _context3.sent;

            if (!validToken) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('user'));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getTokenForBrowser.apply(this, arguments);
}

function getTokenForServer(_x2) {
  return _getTokenForServer.apply(this, arguments);
}

function _getTokenForServer() {
  _getTokenForServer = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req) {
    var jwtFromCookie, token, validToken;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.headers.cookie) {
              _context4.next = 13;
              break;
            }

            jwtFromCookie = req.headers.cookie.split(';').find(function (c) {
              return c.trim().startsWith('jwtToken=');
            });

            if (jwtFromCookie) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", undefined);

          case 4:
            token = jwtFromCookie.split('=')[1];
            _context4.next = 7;
            return verifyToken(token);

          case 7:
            validToken = _context4.sent;

            if (!validToken) {
              _context4.next = 12;
              break;
            }

            return _context4.abrupt("return", jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default.a.decode(token));

          case 12:
            return _context4.abrupt("return", undefined);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getTokenForServer.apply(this, arguments);
}



/***/ })

})
//# sourceMappingURL=index.js.4e2718c4608ad60d9ad9.hot-update.js.map