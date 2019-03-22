webpackHotUpdate("static/development/pages/shows.js",{

/***/ "./components/Show.js":
/*!****************************!*\
  !*** ./components/Show.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andreifindrihan/FrontEnd/Next-JS-App/components/Show.js";


var Show = function Show(props) {
  var showInfo = props.showInfo;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: id,
    className: "card mb-3 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, showInfo.original_name.length > 18 ? showInfo.original_name.substring(0, 18) + '...' : showInfo.original_name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, showInfo.overview.length > 300 ? showInfo.overview.substring(0, 300) + '...' : showInfo.overview)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://image.tmdb.org/t/p/original/".concat(showInfo.backdrop_path),
    alt: "Card image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ })

})
//# sourceMappingURL=shows.js.cdecb8f3da16ed009061.hot-update.js.map