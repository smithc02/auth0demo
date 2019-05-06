webpackHotUpdate("static/development/pages/redirect.js",{

/***/ "./static/auth0.js":
/*!*************************!*\
  !*** ./static/auth0.js ***!
  \*************************/
/*! exports provided: login, parseHash, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseHash", function() { return parseHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ "./settings.js");


var clientID = _settings__WEBPACK_IMPORTED_MODULE_1__["clientID"];
var domain = _settings__WEBPACK_IMPORTED_MODULE_1__["domain"];

function webAuth(clientID, domain) {
  return new auth0_js__WEBPACK_IMPORTED_MODULE_0__["default"].WebAuth({
    clientID: clientID,
    domain: domain
  });
} //login function


function login() {
  var options = {
    responseType: 'id_token',
    redirectUri: 'http://localhost:3000/redirect',
    scope: 'openid profile email'
  };
  return webAuth(clientID, domain).authorize(options);
}

function parseHash(cb) {
  return webAuth(clientID, domain).parseHash(cb);
}

function logout() {
  return webAuth(clientID, domain).logout();
}



/***/ })

})
//# sourceMappingURL=redirect.js.50a4b9d31912e735fcea.hot-update.js.map