webpackHotUpdate("static/development/pages/movies.js",{

/***/ "./components/Movie.js":
/*!*****************************!*\
  !*** ./components/Movie.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/styles.scss */ "./sass/styles.scss");
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andreifindrihan/FrontEnd/Next-JS-App/components/Movie.js";



var Movie = function Movie(props) {
  var movieInfo = props.movieInfo;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-3 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, movieInfo.title.length > 18 ? movieInfo.title.substring(0, 18) + '...' : movieInfo.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, movieInfo.overview.length > 300 ? movieInfo.overview.substring(0, 300) + '...' : movieInfo.overview)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://image.tmdb.org/t/p/original/".concat(movieInfo.backdrop_path),
    alt: "Card image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ })

})
//# sourceMappingURL=movies.js.623918bcfcec24393eaf.hot-update.js.map