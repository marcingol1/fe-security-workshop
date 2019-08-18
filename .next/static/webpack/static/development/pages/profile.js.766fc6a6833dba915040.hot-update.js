webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-cookies */ "./node_modules/next-cookies/dist/next-cookies.browser.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/auth */ "./utils/auth.js");
/* harmony import */ var _utils_get_host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/get-host */ "./utils/get-host.js");



var _jsxFileName = "/Users/marcingol/Desktop/hello-world (1)/pages/profile.js";









var Profile = function Profile(props) {
  var _props$data = props.data,
      name = _props$data.name,
      login = _props$data.login,
      bio = _props$data.bio,
      avatarUrl = _props$data.avatarUrl;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    src: avatarUrl,
    alt: "Avatar",
    className: "jsx-3915600173",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-3915600173",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: login
    },
    className: "jsx-3915600173" + " " + "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-3915600173",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, bio), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3915600173",
    __self: this
  }, "img.jsx-3915600173{max-width:200px;border-radius:0.5rem;}h1.jsx-3915600173{margin-bottom:0;}.lead.jsx-3915600173{margin-top:0;font-size:1.5rem;font-weight:300;color:#666;}p.jsx-3915600173{color:#6a737d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJjaW5nb2wvRGVza3RvcC9oZWxsby13b3JsZCAoMSkvcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmtCLEFBRzJCLEFBSUEsQUFHSCxBQU1DLGFBTEcsQ0FNbkIsRUFidUIsQUFJdkIsY0FJa0IsT0FQbEIsU0FRYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9tYXJjaW5nb2wvRGVza3RvcC9oZWxsby13b3JsZCAoMSkvcGFnZXMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0IHsgd2l0aEF1dGhTeW5jIH0gZnJvbSAnLi4vdXRpbHMvYXV0aCc7XG5pbXBvcnQgZ2V0SG9zdCBmcm9tICcuLi91dGlscy9nZXQtaG9zdCc7XG5cbmNvbnN0IFByb2ZpbGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgbG9naW4sIGJpbywgYXZhdGFyVXJsIH0gPSBwcm9wcy5kYXRhO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxpbWcgc3JjPXthdmF0YXJVcmx9IGFsdD1cIkF2YXRhclwiIC8+XG4gICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGxvZ2luIH19IC8+XG4gICAgICA8cD57YmlvfTwvcD5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGgxIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sZWFkIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6ICM2YTczN2Q7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cblByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgeyB0b2tlbiB9ID0gbmV4dENvb2tpZShjdHgpO1xuICBjb25zdCBhcGlVcmwgPSBnZXRIb3N0KGN0eC5yZXEpICsgJy9hcGkvcHJvZmlsZSc7XG5cbiAgY29uc3QgcmVkaXJlY3RPbkVycm9yID0gKCkgPT5cbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICAgIDogY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiAnL2xvZ2luJyB9KS5lbmQoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBKU09OLnN0cmluZ2lmeSh7IHRva2VuIH0pXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGpzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ2pzJywganMpO1xuICAgICAgcmV0dXJuIGpzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3VuZmV0Y2gjY2F2ZWF0c1xuICAgICAgcmV0dXJuIGF3YWl0IHJlZGlyZWN0T25FcnJvcigpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBJbXBsZW1lbnRhdGlvbiBvciBOZXR3b3JrIGVycm9yXG4gICAgcmV0dXJuIHJlZGlyZWN0T25FcnJvcigpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aFN5bmMoUHJvZmlsZSk7XG4iXX0= */\n/*@ sourceURL=/Users/marcingol/Desktop/hello-world (1)/pages/profile.js */"));
};

Profile.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    var _nextCookie, token, apiUrl, redirectOnError, response, js;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _nextCookie = next_cookies__WEBPACK_IMPORTED_MODULE_7___default()(ctx), token = _nextCookie.token;
            apiUrl = Object(_utils_get_host__WEBPACK_IMPORTED_MODULE_10__["default"])(ctx.req) + '/api/profile';

            redirectOnError = function redirectOnError() {
              return  true ? next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login') : undefined;
            };

            _context.prev = 3;
            _context.next = 6;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()(apiUrl, {
              credentials: 'include',
              headers: {
                Authorization: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  token: token
                })
              }
            });

          case 6:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 15;
              break;
            }

            _context.next = 10;
            return response.json();

          case 10:
            js = _context.sent;
            console.log('js', js);
            return _context.abrupt("return", js);

          case 15:
            _context.next = 17;
            return redirectOnError();

          case 17:
            return _context.abrupt("return", _context.sent);

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](3);
            return _context.abrupt("return", redirectOnError());

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 20]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_auth__WEBPACK_IMPORTED_MODULE_9__["withAuthSync"])(Profile));

/***/ })

})
//# sourceMappingURL=profile.js.766fc6a6833dba915040.hot-update.js.map