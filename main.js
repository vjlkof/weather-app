/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html > * {
  font-size: 16px;
  margin: 0px;
}

@media (max-width: 1280px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 10px;
  }
}

body {
  width: 80vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: skyblue;
  gap: 10px;
}

h1 {
  margin-bottom: 0px;
}

main h1 {
  font-size: 2rem;
  font-weight: 600;
}
main h2 {
  font-size: 2.6rem;
}
main h3 {
  font-size: 2rem;
}
main h4 {
  font-size: 1.4rem;
  text-transform: capitalize;
}
main h5 {
  font-size: 1.4rem;
}
main h6 {
  font-size: 0.9rem;
}
main label {
  font-size: 1rem;
}

.switch-container {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
}

.switch-container > label {
  font-weight: 600;
  transition: opacity 0.5s ease;
}

.hidden {
  display: none;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle-input {
  display: none;
}

.toggle-label {
  display: block;
  background-color: #ccc;
  border-radius: 17px;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.3s;
}

.toggle-input:checked + .toggle-label {
  background-color: #4caf50; /* Change the background color when the switch is checked */
}

.toggle-label::before {
  content: "";
  height: 26px;
  width: 26px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: transform 0.3s;
}

.toggle-input:checked + .toggle-label::before {
  transform: translateX(
    26px
  ); /* Move the knob to the right when the switch is checked */
}

.search-container {
  display: flex;
  justify-content: center;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  height: 40px;
}

input {
  border: none;
  border-radius: 10px;
  padding: 5px;
  background-color: rgb(216, 216, 216);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
}

button {
  color: white;
  background-color: green;
  border: none;
  font-weight: 600;
  border-radius: 50%;
  font-size: 1.4rem;
  text-align: center;
}
button:hover {
  color: white;
  background-color: rgb(7, 156, 7);
  cursor: pointer;
}

#content {
  width: 100%;
}

main {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  grid-template-rows: min-content min-content;
  column-gap: 10px;
  row-gap: 20px;
}

.left-side-data > * {
  margin: 0px;
}

.left-side-data {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.right-side-data > * {
  margin: 0px;
}

.right-side-data {
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.additional-item {
  width: 100%;
}
.additional-item > * {
  margin: 0px;
  align-items: flex-start;
}

.forecasted > h3 {
  margin: 10px 0px;
}

.forecasted {
  grid-column: 1/-1;
}

.forecasted-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.forecasted-item {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.forecasted-item > * {
  margin: 0px;
}

.forecasted-item > h4 {
  margin-bottom: 10px;
}

.forecasted-item > .forecasted-icon {
  width: 50px;
  height: 50px;
  align-self: center;
}

.forecasted-item > .forecasted-icon > img {
  width: 100%;
  align-items: center;
}

#loading-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,yBAAyB,EAAE,2DAA2D;AACxF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,0BAA0B;AAC5B;;AAEA;EACE;;GAEC,EAAE,0DAA0D;AAC/D;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,oCAAoC;EACpC,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,2CAA2C;EAC3C,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf","sourcesContent":["html > * {\r\n  font-size: 16px;\r\n  margin: 0px;\r\n}\r\n\r\n@media (max-width: 1280px) {\r\n  html {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  html {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\nbody {\r\n  width: 80vw;\r\n  height: 100vh;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: skyblue;\r\n  gap: 10px;\r\n}\r\n\r\nh1 {\r\n  margin-bottom: 0px;\r\n}\r\n\r\nmain h1 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nmain h2 {\r\n  font-size: 2.6rem;\r\n}\r\nmain h3 {\r\n  font-size: 2rem;\r\n}\r\nmain h4 {\r\n  font-size: 1.4rem;\r\n  text-transform: capitalize;\r\n}\r\nmain h5 {\r\n  font-size: 1.4rem;\r\n}\r\nmain h6 {\r\n  font-size: 0.9rem;\r\n}\r\nmain label {\r\n  font-size: 1rem;\r\n}\r\n\r\n.switch-container {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.switch-container > label {\r\n  font-weight: 600;\r\n  transition: opacity 0.5s ease;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.toggle-input {\r\n  display: none;\r\n}\r\n\r\n.toggle-label {\r\n  display: block;\r\n  background-color: #ccc;\r\n  border-radius: 17px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.toggle-input:checked + .toggle-label {\r\n  background-color: #4caf50; /* Change the background color when the switch is checked */\r\n}\r\n\r\n.toggle-label::before {\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 4px;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.toggle-input:checked + .toggle-label::before {\r\n  transform: translateX(\r\n    26px\r\n  ); /* Move the knob to the right when the switch is checked */\r\n}\r\n\r\n.search-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nlabel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n  height: 40px;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: rgb(216, 216, 216);\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  background-color: green;\r\n  border: none;\r\n  font-weight: 600;\r\n  border-radius: 50%;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n}\r\nbutton:hover {\r\n  color: white;\r\n  background-color: rgb(7, 156, 7);\r\n  cursor: pointer;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 0.6fr;\r\n  grid-template-rows: min-content min-content;\r\n  column-gap: 10px;\r\n  row-gap: 20px;\r\n}\r\n\r\n.left-side-data > * {\r\n  margin: 0px;\r\n}\r\n\r\n.left-side-data {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.right-side-data > * {\r\n  margin: 0px;\r\n}\r\n\r\n.right-side-data {\r\n  justify-self: flex-end;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.additional-item {\r\n  width: 100%;\r\n}\r\n.additional-item > * {\r\n  margin: 0px;\r\n  align-items: flex-start;\r\n}\r\n\r\n.forecasted > h3 {\r\n  margin: 10px 0px;\r\n}\r\n\r\n.forecasted {\r\n  grid-column: 1/-1;\r\n}\r\n\r\n.forecasted-data {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.forecasted-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n}\r\n\r\n.forecasted-item > * {\r\n  margin: 0px;\r\n}\r\n\r\n.forecasted-item > h4 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.forecasted-item > .forecasted-icon {\r\n  width: 50px;\r\n  height: 50px;\r\n  align-self: center;\r\n}\r\n\r\n.forecasted-item > .forecasted-icon > img {\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n#loading-container {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.loading {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/currentWeather.js":
/*!******************************************!*\
  !*** ./src/components/currentWeather.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currentWeather)
/* harmony export */ });
function currentWeather(weatherDayInfo) {
  const conditionElement = document.getElementById("condition");
  const nameElement = document.getElementById("name");
  const datetimeElement = document.getElementById("datetime");
  const currentTempElement = document.getElementById("current-temp");
  const descriptionElement = document.getElementById("description");
  const imgElement = document.getElementById("icon-img");
  const minMaxElement = document.getElementById("min-max");
  const feelsLikeElement = document.getElementById("feels-like");
  const HumidityElement = document.getElementById("humidity");
  const pressureElement = document.getElementById("pressure");
  const visibilityElement = document.getElementById("visibility");
  const windSpeedElement = document.getElementById("wind-speed");

  conditionElement.textContent = weatherDayInfo.condition;
  nameElement.textContent = weatherDayInfo.name;
  datetimeElement.textContent = weatherDayInfo.dt;
  currentTempElement.textContent = `${weatherDayInfo.temp || "-"} ° `;
  descriptionElement.textContent = weatherDayInfo.description;
  imgElement.src = weatherDayInfo.icon;
  minMaxElement.textContent = `Min ${weatherDayInfo.temp_min || "-"} ° - Max ${
    weatherDayInfo.temp_max || "-"
  } °`;
  feelsLikeElement.textContent = `${weatherDayInfo.feels_like || "-"} °`;
  HumidityElement.textContent = `${weatherDayInfo.humidity || "-"} %`;
  pressureElement.textContent = `${weatherDayInfo.pressure || "-"} hp`;
  visibilityElement.textContent = `${Math.round(
    weatherDayInfo.visibility / 1000
  )} km `;
  windSpeedElement.textContent = `${weatherDayInfo.wind.speed || "-"} km/h`;
}


/***/ }),

/***/ "./src/components/forecastWeather.js":
/*!*******************************************!*\
  !*** ./src/components/forecastWeather.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ forecastWeather)
/* harmony export */ });
function forecastWeather(forecastedWeather) {
  const forecastedSection = document.querySelector(".forecasted");
  let forecastedDataElement = document.querySelector(".forecasted-data");
  forecastedSection.removeChild(forecastedDataElement);
  forecastedDataElement = document.createElement("div");
  forecastedDataElement.className = "forecasted-data";
  forecastedSection.appendChild(forecastedDataElement);

  forecastedWeather.forecastedArray.forEach((dayItem) => {
    const forecastedItemElement = document.createElement("div");
    const forecastedDayElement = document.createElement("h4");
    const forecastedMaxElement = document.createElement("h3");
    const forecastedMinElement = document.createElement("h6");
    const divForecastedIcon = document.createElement("div");
    const forecastedImgElement = document.createElement("img");

    forecastedItemElement.className = "forecasted-item";
    forecastedDayElement.textContent = dayItem?.dt;
    forecastedMaxElement.textContent = `${dayItem?.temp_max || "-"} °`;
    forecastedMinElement.textContent = `${dayItem?.temp_min || "-"} °`;
    divForecastedIcon.className = "forecasted-icon";
    forecastedImgElement.src = dayItem?.icon;
    forecastedImgElement.alt = dayItem?.condition || "n/a";
    divForecastedIcon.appendChild(forecastedImgElement);
    forecastedItemElement.appendChild(forecastedDayElement);
    forecastedItemElement.appendChild(forecastedMaxElement);
    forecastedItemElement.appendChild(forecastedMinElement);
    forecastedItemElement.appendChild(divForecastedIcon);

    forecastedDataElement.appendChild(forecastedItemElement);
  });
}


/***/ }),

/***/ "./src/components/loading.js":
/*!***********************************!*\
  !*** ./src/components/loading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loading: () => (/* binding */ loading),
/* harmony export */   removeLoading: () => (/* binding */ removeLoading)
/* harmony export */ });
function loading() {
  const contentElement = document.getElementById("content");
  const mainElement = document.getElementById("main");
  const loadingDivElement = document.createElement("div");
  const h1Element = document.createElement("h1");

  mainElement.className = "loading";
  h1Element.textContent = "Loading...";
  loadingDivElement.id = "loading-container";

  loadingDivElement.appendChild(h1Element);
  contentElement.appendChild(loadingDivElement);
}

function removeLoading() {
  const contentElement = document.getElementById("content");
  const mainElement = document.getElementById("main");
  const loadingDivElement = document.getElementById("loading-container");
  mainElement.classList.remove("loading");
  contentElement.removeChild(loadingDivElement);
}


/***/ }),

/***/ "./src/components/searchInput.js":
/*!***************************************!*\
  !*** ./src/components/searchInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchInput)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");


function searchInput() {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  let searchValue = "";

  searchInput.addEventListener("input", () => {
    searchValue = searchInput.value;
  });

  searchButton.addEventListener("click", async () => {
    const switchValue = document.getElementById("toggle").checked;
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])(searchValue, switchValue);
    searchInput.dataset.oldValue = searchValue;
    searchInput.value = "";
  });
}


/***/ }),

/***/ "./src/components/switchButton.js":
/*!****************************************!*\
  !*** ./src/components/switchButton.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ switchButton)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");


function switchButton() {
  const switchInput = document.getElementById("toggle");
  const switchlabel = document.getElementById("unit");
  let switchValue = false;

  switchInput.addEventListener("click", () => {
    const searchInput = document.getElementById("search");
    const searchValue = searchInput.dataset.oldValue || "";
    switchValue = !switchValue;
    switchlabel.classList.add("hidden");
    setTimeout(function () {
      switchlabel.textContent = switchValue ? "Fahrenheit" : "Celsius";
      switchlabel.classList.remove("hidden");
    }, 200);
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])(searchValue, switchValue);
  });
}


/***/ }),

/***/ "./src/helpers/apiCalls.js":
/*!*********************************!*\
  !*** ./src/helpers/apiCalls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeatherDayInfo: () => (/* binding */ fetchWeatherDayInfo),
/* harmony export */   fetchWeatherForecastInfo: () => (/* binding */ fetchWeatherForecastInfo)
/* harmony export */ });
// const key = "10a2265d56a248ec98a154831241801";
const appid = "711c9633cb8ba6f4798e0bcf3f7e25b4";
const defaultPlace = "Buenos Aires";

async function fetchWeatherDayInfo(place = null, unit = null) {
  const defaultUnit = unit ? "imperial" : "metric";

  const weatherDayInfo = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${
      place || defaultPlace
    }&appid=${appid}&units=${defaultUnit}`
  );
  return await weatherDayInfo.json();
}

async function fetchWeatherForecastInfo(place, unit) {
  const defaultUnit = unit ? "imperial" : "metric";

  const weatherForecastInfo = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      place || defaultPlace
    }&appid=${appid}&units=${defaultUnit}`
  );
  return await weatherForecastInfo.json();
}


/***/ }),

/***/ "./src/helpers/convertUnixTimeToDateTime.js":
/*!**************************************************!*\
  !*** ./src/helpers/convertUnixTimeToDateTime.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertUnixTimeToDateTime)
/* harmony export */ });
function convertUnixTimeToDateTime(dateInUnix) {
  const timestampInMilliseconds = dateInUnix * 1000;
  const date = new Date(timestampInMilliseconds);
  const day = date.toLocaleString("en-US", { weekday: "long" }); // Saturday
  const year = date.getFullYear().toString().slice(-2); // 2024 => 24
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 10
  const hours = date.getHours().toString().padStart(2, "0"); // 14
  const minutes = date.getMinutes().toString().padStart(2, "0"); // 30
  const formattedDateTime = `${day} ${year}-${month}-${date.getDate()} ${hours}:${minutes}hs`;

  return { formattedDateTime, formattedDay: day };
}


/***/ }),

/***/ "./src/helpers/deserializers.js":
/*!**************************************!*\
  !*** ./src/helpers/deserializers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deserializeWeatherDayInfo: () => (/* binding */ deserializeWeatherDayInfo),
/* harmony export */   deserializeWeatherForecastInfo: () => (/* binding */ deserializeWeatherForecastInfo)
/* harmony export */ });
/* harmony import */ var _convertUnixTimeToDateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertUnixTimeToDateTime */ "./src/helpers/convertUnixTimeToDateTime.js");

function deserializeWeatherDayInfo(weatherData) {
  // weatherData = {
  //   coord: {
  //     lon: -0.13,
  //     lat: 51.51,
  //   },
  //   weather: [
  //     {
  //       id: 300,
  //       main: "Drizzle",
  //       description: "light intensity drizzle",
  //       icon: "09d",
  //     },
  //   ],
  //   base: "stations",
  //   main: {
  //     temp: 280.32,
  //     pressure: 1012,
  //     humidity: 81,
  //     temp_min: 279.15,
  //     temp_max: 281.15,
  //   },
  //   visibility: 10000,
  //   wind: {
  //     speed: 4.1,
  //     deg: 80,
  //   },
  //   clouds: {
  //     all: 90,
  //   },
  //   dt: 1485789600,
  //   sys: {
  //     type: 1,
  //     id: 5091,
  //     message: 0.0103,
  //     country: "GB",
  //     sunrise: 1485762037,
  //     sunset: 1485794875,
  //   },
  //   id: 2643743,
  //   name: "London",
  //   cod: 200,
  // };
  const { name, coord, dt, weather, main, visibility, wind } = weatherData;
  const { main: condition, description, icon } = weather[0];
  const { temp, feels_like, humidity, pressure, temp_min, temp_max } = main;
  return {
    name,
    coord,
    dt: (0,_convertUnixTimeToDateTime__WEBPACK_IMPORTED_MODULE_0__["default"])(dt).formattedDateTime,
    condition,
    description,
    icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    temp,
    feels_like,
    humidity,
    pressure,
    temp_min,
    temp_max,
    visibility,
    wind,
  };
}

function deserializeWeatherForecastInfo(weatherForecastData) {
  // weatherForecastData = {
  //   cod: "200",
  //   message: 0,
  //   cnt: 40,
  //   list: [
  //     {
  //       dt: 1647345600,
  //       main: {
  //         temp: 284.83,
  //         feels_like: 283.59,
  //         temp_min: 284.83,
  //         temp_max: 285.69,
  //         pressure: 1013,
  //         sea_level: 1013,
  //         grnd_level: 964,
  //         humidity: 59,
  //         temp_kf: -0.86,
  //       },
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       clouds: {
  //         all: 100,
  //       },
  //       wind: {
  //         speed: 0.7,
  //         deg: 288,
  //         gust: 2.1,
  //       },
  //       visibility: 10000,
  //       pop: 0,
  //       sys: {
  //         pod: "d",
  //       },
  //       dt_txt: "2022-03-15 12:00:00",
  //     },
  //     {
  //       dt: 1647356400,
  //       main: {
  //         temp: 285.09,
  //         feels_like: 283.85,
  //         temp_min: 285.09,
  //         temp_max: 285.6,
  //         pressure: 1016,
  //         sea_level: 1016,
  //         grnd_level: 961,
  //         humidity: 58,
  //         temp_kf: -0.51,
  //       },
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04d",
  //         },
  //       ],
  //       clouds: {
  //         all: 100,
  //       },
  //       wind: {
  //         speed: 2.24,
  //         deg: 26,
  //         gust: 2.56,
  //       },
  //       visibility: 10000,
  //       pop: 0.26,
  //       sys: {
  //         pod: "d",
  //       },
  //       dt_txt: "2022-03-15 15:00:00",
  //     },
  //     {
  //       dt: 1647367200,
  //       main: {
  //         temp: 283.03,
  //         feels_like: 281.89,
  //         temp_min: 282.13,
  //         temp_max: 283.03,
  //         pressure: 1020,
  //         sea_level: 1020,
  //         grnd_level: 961,
  //         humidity: 71,
  //         temp_kf: 0.9,
  //       },
  //       weather: [
  //         {
  //           id: 804,
  //           main: "Clouds",
  //           description: "overcast clouds",
  //           icon: "04n",
  //         },
  //       ],
  //       clouds: {
  //         all: 100,
  //       },
  //       wind: {
  //         speed: 2.41,
  //         deg: 169,
  //         gust: 4.81,
  //       },
  //       visibility: 10000,
  //       pop: 0.31,
  //       sys: {
  //         pod: "n",
  //       },
  //       dt_txt: "2022-03-15 18:00:00",
  //     },
  //     {
  //       dt: 1647766800,
  //       main: {
  //         temp: 278.26,
  //         feels_like: 274.33,
  //         temp_min: 278.26,
  //         temp_max: 278.26,
  //         pressure: 1030,
  //         sea_level: 1030,
  //         grnd_level: 966,
  //         humidity: 54,
  //         temp_kf: 0,
  //       },
  //       weather: [
  //         {
  //           id: 801,
  //           main: "Clouds",
  //           description: "few clouds",
  //           icon: "02d",
  //         },
  //       ],
  //       clouds: {
  //         all: 18,
  //       },
  //       wind: {
  //         speed: 5.66,
  //         deg: 89,
  //         gust: 8.01,
  //       },
  //       visibility: 10000,
  //       pop: 0,
  //       sys: {
  //         pod: "d",
  //       },
  //       dt_txt: "2022-03-20 09:00:00",
  //     },
  //   ],
  //   city: {
  //     id: 2867714,
  //     name: "Munich",
  //     coord: {
  //       lat: 48.1374,
  //       lon: 11.5755,
  //     },
  //     country: "DE",
  //     population: 1260391,
  //     timezone: 3600,
  //     sunrise: 1647322046,
  //     sunset: 1647364681,
  //   },
  // };
  const { city, list } = weatherForecastData;
  const { name } = city;
  const currentDate = new Date();
  const todayDay = (0,_convertUnixTimeToDateTime__WEBPACK_IMPORTED_MODULE_0__["default"])(
    Math.floor(currentDate.getTime() / 1000)
  ).formattedDay;
  let dtAux = "";
  let minAux = "";
  let maxAux = "";
  let iconAux = "";
  let conditionAux = "";
  const forecastedArray = [];

  for (let i = 0; i < list.length; i++) {
    let convertedForecastDt = (0,_convertUnixTimeToDateTime__WEBPACK_IMPORTED_MODULE_0__["default"])(
      list[i].dt
    ).formattedDay;

    if (convertedForecastDt === todayDay) {
      continue;
    }

    if (convertedForecastDt === dtAux) {
      if (list[i].main.temp_min < minAux) {
        minAux = list[i].main.temp_min;
      }
      if (list[i].main.temp_max > maxAux) {
        maxAux = list[i].main.temp_max;
        iconAux = list[i].weather[0].icon;
      }
      continue;
    }

    if (convertedForecastDt !== dtAux) {
      if (dtAux !== "") {
        forecastedArray.push({
          dt: dtAux,
          icon: `https://openweathermap.org/img/wn/${iconAux}@2x.png`,
          condition: conditionAux,
          temp_min: minAux,
          temp_max: maxAux,
        });
      }
      dtAux = convertedForecastDt;
      minAux = list[i].main.temp_min;
      maxAux = list[i].main.temp_max;
      iconAux = list[i].weather[0].icon;
      conditionAux = list[i].weather[0].main;
    }
  }

  forecastedArray.push({
    dt: dtAux,
    icon: `https://openweathermap.org/img/wn/${iconAux}@2x.png`,
    condition: conditionAux,
    temp_min: minAux,
    temp_max: maxAux,
  });

  return {
    name,
    forecastedArray,
  };
}


/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiCalls */ "./src/helpers/apiCalls.js");
/* harmony import */ var _helpers_deserializers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/deserializers */ "./src/helpers/deserializers.js");
/* harmony import */ var _components_currentWeather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/currentWeather */ "./src/components/currentWeather.js");
/* harmony import */ var _components_forecastWeather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/forecastWeather */ "./src/components/forecastWeather.js");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loading */ "./src/components/loading.js");






async function home(place, unit) {
  (0,_components_loading__WEBPACK_IMPORTED_MODULE_4__.loading)();
  const weatherDayInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherDayInfo)(place, unit);
  const weatherForecastInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherForecastInfo)(place, unit);
  const deserializedDayData = (0,_helpers_deserializers__WEBPACK_IMPORTED_MODULE_1__.deserializeWeatherDayInfo)(weatherDayInfo);
  const deserializedForecastData =
    (0,_helpers_deserializers__WEBPACK_IMPORTED_MODULE_1__.deserializeWeatherForecastInfo)(weatherForecastInfo);
  (0,_components_currentWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(deserializedDayData);
  (0,_components_forecastWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(deserializedForecastData);
  (0,_components_loading__WEBPACK_IMPORTED_MODULE_4__.removeLoading)();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _components_searchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/searchInput */ "./src/components/searchInput.js");
/* harmony import */ var _components_switchButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/switchButton */ "./src/components/switchButton.js");





(0,_components_switchButton__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_searchInput__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEs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IndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9mb3JlY2FzdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9sb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zd2l0Y2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzL2NvbnZlcnRVbml4VGltZVRvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy9kZXNlcmlhbGl6ZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwgPiAqIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1haW4gaDEge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbm1haW4gaDIge1xyXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xyXG59XHJcbm1haW4gaDMge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5tYWluIGg0IHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5tYWluIGg1IHtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxufVxyXG5tYWluIGg2IHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5tYWluIGxhYmVsIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5zd2l0Y2gtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5zd2l0Y2gtY29udGFpbmVyID4gbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4udG9nZ2xlLWlucHV0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9nZ2xlLWxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4udG9nZ2xlLWlucHV0OmNoZWNrZWQgKyAudG9nZ2xlLWxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKi9cclxufVxyXG5cclxuLnRvZ2dsZS1sYWJlbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjZweDtcclxuICB3aWR0aDogMjZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNHB4O1xyXG4gIGxlZnQ6IDRweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxufVxyXG5cclxuLnRvZ2dsZS1pbnB1dDpjaGVja2VkICsgLnRvZ2dsZS1sYWJlbDo6YmVmb3JlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXHJcbiAgICAyNnB4XHJcbiAgKTsgLyogTW92ZSB0aGUga25vYiB0byB0aGUgcmlnaHQgd2hlbiB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKi9cclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxNTYsIDcpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNmZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgbWluLWNvbnRlbnQ7XHJcbiAgY29sdW1uLWdhcDogMTBweDtcclxuICByb3ctZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4ubGVmdC1zaWRlLWRhdGEgPiAqIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmxlZnQtc2lkZS1kYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwLjRyZW07XHJcbn1cclxuXHJcbi5yaWdodC1zaWRlLWRhdGEgPiAqIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnJpZ2h0LXNpZGUtZGF0YSB7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uYWRkaXRpb25hbC1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWRkaXRpb25hbC1pdGVtID4gKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkID4gaDMge1xyXG4gIG1hcmdpbjogMTBweCAwcHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkIHtcclxuICBncmlkLWNvbHVtbjogMS8tMTtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQtZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkLWl0ZW0gPiAqIHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQtaXRlbSA+IGg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1pdGVtID4gLmZvcmVjYXN0ZWQtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQtaXRlbSA+IC5mb3JlY2FzdGVkLWljb24gPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSwyREFBMkQ7QUFDeEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsMERBQTBEO0FBQy9EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCA+ICoge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gaDEge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxubWFpbiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNnJlbTtcXHJcXG59XFxyXFxubWFpbiBoMyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbm1haW4gaDQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG59XFxyXFxubWFpbiBoNSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxubWFpbiBoNiB7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxubWFpbiBsYWJlbCB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLWNvbnRhaW5lciA+IGxhYmVsIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgaGVpZ2h0OiAzNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWlucHV0IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtbGFiZWwge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1pbnB1dDpjaGVja2VkICsgLnRvZ2dsZS1sYWJlbCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwOyAvKiBDaGFuZ2UgdGhlIGJhY2tncm91bmQgY29sb3Igd2hlbiB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1sYWJlbDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgd2lkdGg6IDI2cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNHB4O1xcclxcbiAgbGVmdDogNHB4O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtbGFiZWw6OmJlZm9yZSB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoXFxyXFxuICAgIDI2cHhcXHJcXG4gICk7IC8qIE1vdmUgdGhlIGtub2IgdG8gdGhlIHJpZ2h0IHdoZW4gdGhlIHN3aXRjaCBpcyBjaGVja2VkICovXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xcclxcbiAgYm94LXNoYWRvdzogMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbmJ1dHRvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCA3KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC42ZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xcclxcbiAgY29sdW1uLWdhcDogMTBweDtcXHJcXG4gIHJvdy1nYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNpZGUtZGF0YSA+ICoge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXNpZGUtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtc2lkZS1kYXRhID4gKiB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUtZGF0YSB7XFxyXFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uYWwtaXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmFkZGl0aW9uYWwtaXRlbSA+ICoge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQgPiBoMyB7XFxyXFxuICBtYXJnaW46IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZCB7XFxyXFxuICBncmlkLWNvbHVtbjogMS8tMTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQtZGF0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWl0ZW0gPiAqIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZC1pdGVtID4gaDQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQtaXRlbSA+IC5mb3JlY2FzdGVkLWljb24ge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWl0ZW0gPiAuZm9yZWNhc3RlZC1pY29uID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2xvYWRpbmctY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvYWRpbmcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbnRXZWF0aGVyKHdlYXRoZXJEYXlJbmZvKSB7XHJcbiAgY29uc3QgY29uZGl0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uXCIpO1xyXG4gIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYW1lXCIpO1xyXG4gIGNvbnN0IGRhdGV0aW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZXRpbWVcIik7XHJcbiAgY29uc3QgY3VycmVudFRlbXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXRlbXBcIik7XHJcbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKTtcclxuICBjb25zdCBpbWdFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpY29uLWltZ1wiKTtcclxuICBjb25zdCBtaW5NYXhFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW4tbWF4XCIpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2VcIik7XHJcbiAgY29uc3QgSHVtaWRpdHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcclxuICBjb25zdCBwcmVzc3VyZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzdXJlXCIpO1xyXG4gIGNvbnN0IHZpc2liaWxpdHlFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmlsaXR5XCIpO1xyXG4gIGNvbnN0IHdpbmRTcGVlZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmQtc3BlZWRcIik7XHJcblxyXG4gIGNvbmRpdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF5SW5mby5jb25kaXRpb247XHJcbiAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF5SW5mby5uYW1lO1xyXG4gIGRhdGV0aW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXlJbmZvLmR0O1xyXG4gIGN1cnJlbnRUZW1wRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXlJbmZvLnRlbXAgfHwgXCItXCJ9IMKwIGA7XHJcbiAgZGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRheUluZm8uZGVzY3JpcHRpb247XHJcbiAgaW1nRWxlbWVudC5zcmMgPSB3ZWF0aGVyRGF5SW5mby5pY29uO1xyXG4gIG1pbk1heEVsZW1lbnQudGV4dENvbnRlbnQgPSBgTWluICR7d2VhdGhlckRheUluZm8udGVtcF9taW4gfHwgXCItXCJ9IMKwIC0gTWF4ICR7XHJcbiAgICB3ZWF0aGVyRGF5SW5mby50ZW1wX21heCB8fCBcIi1cIlxyXG4gIH0gwrBgO1xyXG4gIGZlZWxzTGlrZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF5SW5mby5mZWVsc19saWtlIHx8IFwiLVwifSDCsGA7XHJcbiAgSHVtaWRpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRheUluZm8uaHVtaWRpdHkgfHwgXCItXCJ9ICVgO1xyXG4gIHByZXNzdXJlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXlJbmZvLnByZXNzdXJlIHx8IFwiLVwifSBocGA7XHJcbiAgdmlzaWJpbGl0eUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKFxyXG4gICAgd2VhdGhlckRheUluZm8udmlzaWJpbGl0eSAvIDEwMDBcclxuICApfSBrbSBgO1xyXG4gIHdpbmRTcGVlZEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF5SW5mby53aW5kLnNwZWVkIHx8IFwiLVwifSBrbS9oYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JlY2FzdFdlYXRoZXIoZm9yZWNhc3RlZFdlYXRoZXIpIHtcclxuICBjb25zdCBmb3JlY2FzdGVkU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RlZFwiKTtcclxuICBsZXQgZm9yZWNhc3RlZERhdGFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdGVkLWRhdGFcIik7XHJcbiAgZm9yZWNhc3RlZFNlY3Rpb24ucmVtb3ZlQ2hpbGQoZm9yZWNhc3RlZERhdGFFbGVtZW50KTtcclxuICBmb3JlY2FzdGVkRGF0YUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvcmVjYXN0ZWREYXRhRWxlbWVudC5jbGFzc05hbWUgPSBcImZvcmVjYXN0ZWQtZGF0YVwiO1xyXG4gIGZvcmVjYXN0ZWRTZWN0aW9uLmFwcGVuZENoaWxkKGZvcmVjYXN0ZWREYXRhRWxlbWVudCk7XHJcblxyXG4gIGZvcmVjYXN0ZWRXZWF0aGVyLmZvcmVjYXN0ZWRBcnJheS5mb3JFYWNoKChkYXlJdGVtKSA9PiB7XHJcbiAgICBjb25zdCBmb3JlY2FzdGVkSXRlbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RlZERheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBjb25zdCBmb3JlY2FzdGVkTWF4RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICAgIGNvbnN0IGZvcmVjYXN0ZWRNaW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xyXG4gICAgY29uc3QgZGl2Rm9yZWNhc3RlZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RlZEltZ0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cclxuICAgIGZvcmVjYXN0ZWRJdGVtRWxlbWVudC5jbGFzc05hbWUgPSBcImZvcmVjYXN0ZWQtaXRlbVwiO1xyXG4gICAgZm9yZWNhc3RlZERheUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXlJdGVtPy5kdDtcclxuICAgIGZvcmVjYXN0ZWRNYXhFbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF5SXRlbT8udGVtcF9tYXggfHwgXCItXCJ9IMKwYDtcclxuICAgIGZvcmVjYXN0ZWRNaW5FbGVtZW50LnRleHRDb250ZW50ID0gYCR7ZGF5SXRlbT8udGVtcF9taW4gfHwgXCItXCJ9IMKwYDtcclxuICAgIGRpdkZvcmVjYXN0ZWRJY29uLmNsYXNzTmFtZSA9IFwiZm9yZWNhc3RlZC1pY29uXCI7XHJcbiAgICBmb3JlY2FzdGVkSW1nRWxlbWVudC5zcmMgPSBkYXlJdGVtPy5pY29uO1xyXG4gICAgZm9yZWNhc3RlZEltZ0VsZW1lbnQuYWx0ID0gZGF5SXRlbT8uY29uZGl0aW9uIHx8IFwibi9hXCI7XHJcbiAgICBkaXZGb3JlY2FzdGVkSWNvbi5hcHBlbmRDaGlsZChmb3JlY2FzdGVkSW1nRWxlbWVudCk7XHJcbiAgICBmb3JlY2FzdGVkSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9yZWNhc3RlZERheUVsZW1lbnQpO1xyXG4gICAgZm9yZWNhc3RlZEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGZvcmVjYXN0ZWRNYXhFbGVtZW50KTtcclxuICAgIGZvcmVjYXN0ZWRJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChmb3JlY2FzdGVkTWluRWxlbWVudCk7XHJcbiAgICBmb3JlY2FzdGVkSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2Rm9yZWNhc3RlZEljb24pO1xyXG5cclxuICAgIGZvcmVjYXN0ZWREYXRhRWxlbWVudC5hcHBlbmRDaGlsZChmb3JlY2FzdGVkSXRlbUVsZW1lbnQpO1xyXG4gIH0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkaW5nKCkge1xyXG4gIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGxvYWRpbmdEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoMUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG4gIG1haW5FbGVtZW50LmNsYXNzTmFtZSA9IFwibG9hZGluZ1wiO1xyXG4gIGgxRWxlbWVudC50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiO1xyXG4gIGxvYWRpbmdEaXZFbGVtZW50LmlkID0gXCJsb2FkaW5nLWNvbnRhaW5lclwiO1xyXG5cclxuICBsb2FkaW5nRGl2RWxlbWVudC5hcHBlbmRDaGlsZChoMUVsZW1lbnQpO1xyXG4gIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGxvYWRpbmdEaXZFbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxvYWRpbmcoKSB7XHJcbiAgY29uc3QgY29udGVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcbiAgY29uc3QgbG9hZGluZ0RpdkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmctY29udGFpbmVyXCIpO1xyXG4gIG1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xyXG4gIGNvbnRlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxvYWRpbmdEaXZFbGVtZW50KTtcclxufVxyXG4iLCJpbXBvcnQgaG9tZSBmcm9tIFwiLi4vcGFnZXMvaG9tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoSW5wdXQoKSB7XHJcbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1idXR0b25cIik7XHJcbiAgbGV0IHNlYXJjaFZhbHVlID0gXCJcIjtcclxuXHJcbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgIHNlYXJjaFZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc3dpdGNoVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKS5jaGVja2VkO1xyXG4gICAgaG9tZShzZWFyY2hWYWx1ZSwgc3dpdGNoVmFsdWUpO1xyXG4gICAgc2VhcmNoSW5wdXQuZGF0YXNldC5vbGRWYWx1ZSA9IHNlYXJjaFZhbHVlO1xyXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBob21lIGZyb20gXCIuLi9wYWdlcy9ob21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzd2l0Y2hCdXR0b24oKSB7XHJcbiAgY29uc3Qgc3dpdGNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICBjb25zdCBzd2l0Y2hsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdFwiKTtcclxuICBsZXQgc3dpdGNoVmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgc3dpdGNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XHJcbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHNlYXJjaElucHV0LmRhdGFzZXQub2xkVmFsdWUgfHwgXCJcIjtcclxuICAgIHN3aXRjaFZhbHVlID0gIXN3aXRjaFZhbHVlO1xyXG4gICAgc3dpdGNobGFiZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzd2l0Y2hsYWJlbC50ZXh0Q29udGVudCA9IHN3aXRjaFZhbHVlID8gXCJGYWhyZW5oZWl0XCIgOiBcIkNlbHNpdXNcIjtcclxuICAgICAgc3dpdGNobGFiZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH0sIDIwMCk7XHJcbiAgICBob21lKHNlYXJjaFZhbHVlLCBzd2l0Y2hWYWx1ZSk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gY29uc3Qga2V5ID0gXCIxMGEyMjY1ZDU2YTI0OGVjOThhMTU0ODMxMjQxODAxXCI7XHJcbmNvbnN0IGFwcGlkID0gXCI3MTFjOTYzM2NiOGJhNmY0Nzk4ZTBiY2YzZjdlMjViNFwiO1xyXG5jb25zdCBkZWZhdWx0UGxhY2UgPSBcIkJ1ZW5vcyBBaXJlc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRheUluZm8ocGxhY2UgPSBudWxsLCB1bml0ID0gbnVsbCkge1xyXG4gIGNvbnN0IGRlZmF1bHRVbml0ID0gdW5pdCA/IFwiaW1wZXJpYWxcIiA6IFwibWV0cmljXCI7XHJcblxyXG4gIGNvbnN0IHdlYXRoZXJEYXlJbmZvID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke1xyXG4gICAgICBwbGFjZSB8fCBkZWZhdWx0UGxhY2VcclxuICAgIH0mYXBwaWQ9JHthcHBpZH0mdW5pdHM9JHtkZWZhdWx0VW5pdH1gXHJcbiAgKTtcclxuICByZXR1cm4gYXdhaXQgd2VhdGhlckRheUluZm8uanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRm9yZWNhc3RJbmZvKHBsYWNlLCB1bml0KSB7XHJcbiAgY29uc3QgZGVmYXVsdFVuaXQgPSB1bml0ID8gXCJpbXBlcmlhbFwiIDogXCJtZXRyaWNcIjtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SW5mbyA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7XHJcbiAgICAgIHBsYWNlIHx8IGRlZmF1bHRQbGFjZVxyXG4gICAgfSZhcHBpZD0ke2FwcGlkfSZ1bml0cz0ke2RlZmF1bHRVbml0fWBcclxuICApO1xyXG4gIHJldHVybiBhd2FpdCB3ZWF0aGVyRm9yZWNhc3RJbmZvLmpzb24oKTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb252ZXJ0VW5peFRpbWVUb0RhdGVUaW1lKGRhdGVJblVuaXgpIHtcclxuICBjb25zdCB0aW1lc3RhbXBJbk1pbGxpc2Vjb25kcyA9IGRhdGVJblVuaXggKiAxMDAwO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXBJbk1pbGxpc2Vjb25kcyk7XHJcbiAgY29uc3QgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7IC8vIFNhdHVyZGF5XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnNsaWNlKC0yKTsgLy8gMjAyNCA9PiAyNFxyXG4gIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyAxMFxyXG4gIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyAxNFxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTsgLy8gMzBcclxuICBjb25zdCBmb3JtYXR0ZWREYXRlVGltZSA9IGAke2RheX0gJHt5ZWFyfS0ke21vbnRofS0ke2RhdGUuZ2V0RGF0ZSgpfSAke2hvdXJzfToke21pbnV0ZXN9aHNgO1xyXG5cclxuICByZXR1cm4geyBmb3JtYXR0ZWREYXRlVGltZSwgZm9ybWF0dGVkRGF5OiBkYXkgfTtcclxufVxyXG4iLCJpbXBvcnQgY29udmVydFVuaXhUaW1lVG9EYXRlVGltZSBmcm9tIFwiLi9jb252ZXJ0VW5peFRpbWVUb0RhdGVUaW1lXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVdlYXRoZXJEYXlJbmZvKHdlYXRoZXJEYXRhKSB7XHJcbiAgLy8gd2VhdGhlckRhdGEgPSB7XHJcbiAgLy8gICBjb29yZDoge1xyXG4gIC8vICAgICBsb246IC0wLjEzLFxyXG4gIC8vICAgICBsYXQ6IDUxLjUxLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIHdlYXRoZXI6IFtcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIGlkOiAzMDAsXHJcbiAgLy8gICAgICAgbWFpbjogXCJEcml6emxlXCIsXHJcbiAgLy8gICAgICAgZGVzY3JpcHRpb246IFwibGlnaHQgaW50ZW5zaXR5IGRyaXp6bGVcIixcclxuICAvLyAgICAgICBpY29uOiBcIjA5ZFwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgXSxcclxuICAvLyAgIGJhc2U6IFwic3RhdGlvbnNcIixcclxuICAvLyAgIG1haW46IHtcclxuICAvLyAgICAgdGVtcDogMjgwLjMyLFxyXG4gIC8vICAgICBwcmVzc3VyZTogMTAxMixcclxuICAvLyAgICAgaHVtaWRpdHk6IDgxLFxyXG4gIC8vICAgICB0ZW1wX21pbjogMjc5LjE1LFxyXG4gIC8vICAgICB0ZW1wX21heDogMjgxLjE1LFxyXG4gIC8vICAgfSxcclxuICAvLyAgIHZpc2liaWxpdHk6IDEwMDAwLFxyXG4gIC8vICAgd2luZDoge1xyXG4gIC8vICAgICBzcGVlZDogNC4xLFxyXG4gIC8vICAgICBkZWc6IDgwLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIGNsb3Vkczoge1xyXG4gIC8vICAgICBhbGw6IDkwLFxyXG4gIC8vICAgfSxcclxuICAvLyAgIGR0OiAxNDg1Nzg5NjAwLFxyXG4gIC8vICAgc3lzOiB7XHJcbiAgLy8gICAgIHR5cGU6IDEsXHJcbiAgLy8gICAgIGlkOiA1MDkxLFxyXG4gIC8vICAgICBtZXNzYWdlOiAwLjAxMDMsXHJcbiAgLy8gICAgIGNvdW50cnk6IFwiR0JcIixcclxuICAvLyAgICAgc3VucmlzZTogMTQ4NTc2MjAzNyxcclxuICAvLyAgICAgc3Vuc2V0OiAxNDg1Nzk0ODc1LFxyXG4gIC8vICAgfSxcclxuICAvLyAgIGlkOiAyNjQzNzQzLFxyXG4gIC8vICAgbmFtZTogXCJMb25kb25cIixcclxuICAvLyAgIGNvZDogMjAwLFxyXG4gIC8vIH07XHJcbiAgY29uc3QgeyBuYW1lLCBjb29yZCwgZHQsIHdlYXRoZXIsIG1haW4sIHZpc2liaWxpdHksIHdpbmQgfSA9IHdlYXRoZXJEYXRhO1xyXG4gIGNvbnN0IHsgbWFpbjogY29uZGl0aW9uLCBkZXNjcmlwdGlvbiwgaWNvbiB9ID0gd2VhdGhlclswXTtcclxuICBjb25zdCB7IHRlbXAsIGZlZWxzX2xpa2UsIGh1bWlkaXR5LCBwcmVzc3VyZSwgdGVtcF9taW4sIHRlbXBfbWF4IH0gPSBtYWluO1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgY29vcmQsXHJcbiAgICBkdDogY29udmVydFVuaXhUaW1lVG9EYXRlVGltZShkdCkuZm9ybWF0dGVkRGF0ZVRpbWUsXHJcbiAgICBjb25kaXRpb24sXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGljb246IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29ufUAyeC5wbmdgLFxyXG4gICAgdGVtcCxcclxuICAgIGZlZWxzX2xpa2UsXHJcbiAgICBodW1pZGl0eSxcclxuICAgIHByZXNzdXJlLFxyXG4gICAgdGVtcF9taW4sXHJcbiAgICB0ZW1wX21heCxcclxuICAgIHZpc2liaWxpdHksXHJcbiAgICB3aW5kLFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVdlYXRoZXJGb3JlY2FzdEluZm8od2VhdGhlckZvcmVjYXN0RGF0YSkge1xyXG4gIC8vIHdlYXRoZXJGb3JlY2FzdERhdGEgPSB7XHJcbiAgLy8gICBjb2Q6IFwiMjAwXCIsXHJcbiAgLy8gICBtZXNzYWdlOiAwLFxyXG4gIC8vICAgY250OiA0MCxcclxuICAvLyAgIGxpc3Q6IFtcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIGR0OiAxNjQ3MzQ1NjAwLFxyXG4gIC8vICAgICAgIG1haW46IHtcclxuICAvLyAgICAgICAgIHRlbXA6IDI4NC44MyxcclxuICAvLyAgICAgICAgIGZlZWxzX2xpa2U6IDI4My41OSxcclxuICAvLyAgICAgICAgIHRlbXBfbWluOiAyODQuODMsXHJcbiAgLy8gICAgICAgICB0ZW1wX21heDogMjg1LjY5LFxyXG4gIC8vICAgICAgICAgcHJlc3N1cmU6IDEwMTMsXHJcbiAgLy8gICAgICAgICBzZWFfbGV2ZWw6IDEwMTMsXHJcbiAgLy8gICAgICAgICBncm5kX2xldmVsOiA5NjQsXHJcbiAgLy8gICAgICAgICBodW1pZGl0eTogNTksXHJcbiAgLy8gICAgICAgICB0ZW1wX2tmOiAtMC44NixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHdlYXRoZXI6IFtcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgaWQ6IDgwNCxcclxuICAvLyAgICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcclxuICAvLyAgICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXHJcbiAgLy8gICAgICAgICAgIGljb246IFwiMDRkXCIsXHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgIF0sXHJcbiAgLy8gICAgICAgY2xvdWRzOiB7XHJcbiAgLy8gICAgICAgICBhbGw6IDEwMCxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHdpbmQ6IHtcclxuICAvLyAgICAgICAgIHNwZWVkOiAwLjcsXHJcbiAgLy8gICAgICAgICBkZWc6IDI4OCxcclxuICAvLyAgICAgICAgIGd1c3Q6IDIuMSxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxyXG4gIC8vICAgICAgIHBvcDogMCxcclxuICAvLyAgICAgICBzeXM6IHtcclxuICAvLyAgICAgICAgIHBvZDogXCJkXCIsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBkdF90eHQ6IFwiMjAyMi0wMy0xNSAxMjowMDowMFwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgZHQ6IDE2NDczNTY0MDAsXHJcbiAgLy8gICAgICAgbWFpbjoge1xyXG4gIC8vICAgICAgICAgdGVtcDogMjg1LjA5LFxyXG4gIC8vICAgICAgICAgZmVlbHNfbGlrZTogMjgzLjg1LFxyXG4gIC8vICAgICAgICAgdGVtcF9taW46IDI4NS4wOSxcclxuICAvLyAgICAgICAgIHRlbXBfbWF4OiAyODUuNixcclxuICAvLyAgICAgICAgIHByZXNzdXJlOiAxMDE2LFxyXG4gIC8vICAgICAgICAgc2VhX2xldmVsOiAxMDE2LFxyXG4gIC8vICAgICAgICAgZ3JuZF9sZXZlbDogOTYxLFxyXG4gIC8vICAgICAgICAgaHVtaWRpdHk6IDU4LFxyXG4gIC8vICAgICAgICAgdGVtcF9rZjogLTAuNTEsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB3ZWF0aGVyOiBbXHJcbiAgLy8gICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgIGlkOiA4MDQsXHJcbiAgLy8gICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXHJcbiAgLy8gICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxyXG4gIC8vICAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxyXG4gIC8vICAgICAgICAgfSxcclxuICAvLyAgICAgICBdLFxyXG4gIC8vICAgICAgIGNsb3Vkczoge1xyXG4gIC8vICAgICAgICAgYWxsOiAxMDAsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB3aW5kOiB7XHJcbiAgLy8gICAgICAgICBzcGVlZDogMi4yNCxcclxuICAvLyAgICAgICAgIGRlZzogMjYsXHJcbiAgLy8gICAgICAgICBndXN0OiAyLjU2LFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXHJcbiAgLy8gICAgICAgcG9wOiAwLjI2LFxyXG4gIC8vICAgICAgIHN5czoge1xyXG4gIC8vICAgICAgICAgcG9kOiBcImRcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGR0X3R4dDogXCIyMDIyLTAzLTE1IDE1OjAwOjAwXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBkdDogMTY0NzM2NzIwMCxcclxuICAvLyAgICAgICBtYWluOiB7XHJcbiAgLy8gICAgICAgICB0ZW1wOiAyODMuMDMsXHJcbiAgLy8gICAgICAgICBmZWVsc19saWtlOiAyODEuODksXHJcbiAgLy8gICAgICAgICB0ZW1wX21pbjogMjgyLjEzLFxyXG4gIC8vICAgICAgICAgdGVtcF9tYXg6IDI4My4wMyxcclxuICAvLyAgICAgICAgIHByZXNzdXJlOiAxMDIwLFxyXG4gIC8vICAgICAgICAgc2VhX2xldmVsOiAxMDIwLFxyXG4gIC8vICAgICAgICAgZ3JuZF9sZXZlbDogOTYxLFxyXG4gIC8vICAgICAgICAgaHVtaWRpdHk6IDcxLFxyXG4gIC8vICAgICAgICAgdGVtcF9rZjogMC45LFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgd2VhdGhlcjogW1xyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICBpZDogODA0LFxyXG4gIC8vICAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxyXG4gIC8vICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcclxuICAvLyAgICAgICAgICAgaWNvbjogXCIwNG5cIixcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgXSxcclxuICAvLyAgICAgICBjbG91ZHM6IHtcclxuICAvLyAgICAgICAgIGFsbDogMTAwLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgd2luZDoge1xyXG4gIC8vICAgICAgICAgc3BlZWQ6IDIuNDEsXHJcbiAgLy8gICAgICAgICBkZWc6IDE2OSxcclxuICAvLyAgICAgICAgIGd1c3Q6IDQuODEsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcclxuICAvLyAgICAgICBwb3A6IDAuMzEsXHJcbiAgLy8gICAgICAgc3lzOiB7XHJcbiAgLy8gICAgICAgICBwb2Q6IFwiblwiLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZHRfdHh0OiBcIjIwMjItMDMtMTUgMTg6MDA6MDBcIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIGR0OiAxNjQ3NzY2ODAwLFxyXG4gIC8vICAgICAgIG1haW46IHtcclxuICAvLyAgICAgICAgIHRlbXA6IDI3OC4yNixcclxuICAvLyAgICAgICAgIGZlZWxzX2xpa2U6IDI3NC4zMyxcclxuICAvLyAgICAgICAgIHRlbXBfbWluOiAyNzguMjYsXHJcbiAgLy8gICAgICAgICB0ZW1wX21heDogMjc4LjI2LFxyXG4gIC8vICAgICAgICAgcHJlc3N1cmU6IDEwMzAsXHJcbiAgLy8gICAgICAgICBzZWFfbGV2ZWw6IDEwMzAsXHJcbiAgLy8gICAgICAgICBncm5kX2xldmVsOiA5NjYsXHJcbiAgLy8gICAgICAgICBodW1pZGl0eTogNTQsXHJcbiAgLy8gICAgICAgICB0ZW1wX2tmOiAwLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgd2VhdGhlcjogW1xyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICBpZDogODAxLFxyXG4gIC8vICAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxyXG4gIC8vICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJmZXcgY2xvdWRzXCIsXHJcbiAgLy8gICAgICAgICAgIGljb246IFwiMDJkXCIsXHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgIF0sXHJcbiAgLy8gICAgICAgY2xvdWRzOiB7XHJcbiAgLy8gICAgICAgICBhbGw6IDE4LFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgd2luZDoge1xyXG4gIC8vICAgICAgICAgc3BlZWQ6IDUuNjYsXHJcbiAgLy8gICAgICAgICBkZWc6IDg5LFxyXG4gIC8vICAgICAgICAgZ3VzdDogOC4wMSxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxyXG4gIC8vICAgICAgIHBvcDogMCxcclxuICAvLyAgICAgICBzeXM6IHtcclxuICAvLyAgICAgICAgIHBvZDogXCJkXCIsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBkdF90eHQ6IFwiMjAyMi0wMy0yMCAwOTowMDowMFwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgXSxcclxuICAvLyAgIGNpdHk6IHtcclxuICAvLyAgICAgaWQ6IDI4Njc3MTQsXHJcbiAgLy8gICAgIG5hbWU6IFwiTXVuaWNoXCIsXHJcbiAgLy8gICAgIGNvb3JkOiB7XHJcbiAgLy8gICAgICAgbGF0OiA0OC4xMzc0LFxyXG4gIC8vICAgICAgIGxvbjogMTEuNTc1NSxcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgY291bnRyeTogXCJERVwiLFxyXG4gIC8vICAgICBwb3B1bGF0aW9uOiAxMjYwMzkxLFxyXG4gIC8vICAgICB0aW1lem9uZTogMzYwMCxcclxuICAvLyAgICAgc3VucmlzZTogMTY0NzMyMjA0NixcclxuICAvLyAgICAgc3Vuc2V0OiAxNjQ3MzY0NjgxLFxyXG4gIC8vICAgfSxcclxuICAvLyB9O1xyXG4gIGNvbnN0IHsgY2l0eSwgbGlzdCB9ID0gd2VhdGhlckZvcmVjYXN0RGF0YTtcclxuICBjb25zdCB7IG5hbWUgfSA9IGNpdHk7XHJcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHRvZGF5RGF5ID0gY29udmVydFVuaXhUaW1lVG9EYXRlVGltZShcclxuICAgIE1hdGguZmxvb3IoY3VycmVudERhdGUuZ2V0VGltZSgpIC8gMTAwMClcclxuICApLmZvcm1hdHRlZERheTtcclxuICBsZXQgZHRBdXggPSBcIlwiO1xyXG4gIGxldCBtaW5BdXggPSBcIlwiO1xyXG4gIGxldCBtYXhBdXggPSBcIlwiO1xyXG4gIGxldCBpY29uQXV4ID0gXCJcIjtcclxuICBsZXQgY29uZGl0aW9uQXV4ID0gXCJcIjtcclxuICBjb25zdCBmb3JlY2FzdGVkQXJyYXkgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgY29udmVydGVkRm9yZWNhc3REdCA9IGNvbnZlcnRVbml4VGltZVRvRGF0ZVRpbWUoXHJcbiAgICAgIGxpc3RbaV0uZHRcclxuICAgICkuZm9ybWF0dGVkRGF5O1xyXG5cclxuICAgIGlmIChjb252ZXJ0ZWRGb3JlY2FzdER0ID09PSB0b2RheURheSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udmVydGVkRm9yZWNhc3REdCA9PT0gZHRBdXgpIHtcclxuICAgICAgaWYgKGxpc3RbaV0ubWFpbi50ZW1wX21pbiA8IG1pbkF1eCkge1xyXG4gICAgICAgIG1pbkF1eCA9IGxpc3RbaV0ubWFpbi50ZW1wX21pbjtcclxuICAgICAgfVxyXG4gICAgICBpZiAobGlzdFtpXS5tYWluLnRlbXBfbWF4ID4gbWF4QXV4KSB7XHJcbiAgICAgICAgbWF4QXV4ID0gbGlzdFtpXS5tYWluLnRlbXBfbWF4O1xyXG4gICAgICAgIGljb25BdXggPSBsaXN0W2ldLndlYXRoZXJbMF0uaWNvbjtcclxuICAgICAgfVxyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29udmVydGVkRm9yZWNhc3REdCAhPT0gZHRBdXgpIHtcclxuICAgICAgaWYgKGR0QXV4ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgZm9yZWNhc3RlZEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgZHQ6IGR0QXV4LFxyXG4gICAgICAgICAgaWNvbjogYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25BdXh9QDJ4LnBuZ2AsXHJcbiAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbkF1eCxcclxuICAgICAgICAgIHRlbXBfbWluOiBtaW5BdXgsXHJcbiAgICAgICAgICB0ZW1wX21heDogbWF4QXV4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGR0QXV4ID0gY29udmVydGVkRm9yZWNhc3REdDtcclxuICAgICAgbWluQXV4ID0gbGlzdFtpXS5tYWluLnRlbXBfbWluO1xyXG4gICAgICBtYXhBdXggPSBsaXN0W2ldLm1haW4udGVtcF9tYXg7XHJcbiAgICAgIGljb25BdXggPSBsaXN0W2ldLndlYXRoZXJbMF0uaWNvbjtcclxuICAgICAgY29uZGl0aW9uQXV4ID0gbGlzdFtpXS53ZWF0aGVyWzBdLm1haW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JlY2FzdGVkQXJyYXkucHVzaCh7XHJcbiAgICBkdDogZHRBdXgsXHJcbiAgICBpY29uOiBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkF1eH1AMngucG5nYCxcclxuICAgIGNvbmRpdGlvbjogY29uZGl0aW9uQXV4LFxyXG4gICAgdGVtcF9taW46IG1pbkF1eCxcclxuICAgIHRlbXBfbWF4OiBtYXhBdXgsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lLFxyXG4gICAgZm9yZWNhc3RlZEFycmF5LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBmZXRjaFdlYXRoZXJEYXlJbmZvLFxyXG4gIGZldGNoV2VhdGhlckZvcmVjYXN0SW5mbyxcclxufSBmcm9tIFwiLi4vaGVscGVycy9hcGlDYWxsc1wiO1xyXG5pbXBvcnQge1xyXG4gIGRlc2VyaWFsaXplV2VhdGhlckRheUluZm8sXHJcbiAgZGVzZXJpYWxpemVXZWF0aGVyRm9yZWNhc3RJbmZvLFxyXG59IGZyb20gXCIuLi9oZWxwZXJzL2Rlc2VyaWFsaXplcnNcIjtcclxuaW1wb3J0IGN1cnJlbnRXZWF0aGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2N1cnJlbnRXZWF0aGVyXCI7XHJcbmltcG9ydCBmb3JlY2FzdFdlYXRoZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9yZWNhc3RXZWF0aGVyXCI7XHJcbmltcG9ydCB7IGxvYWRpbmcsIHJlbW92ZUxvYWRpbmcgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBob21lKHBsYWNlLCB1bml0KSB7XHJcbiAgbG9hZGluZygpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXlJbmZvID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF5SW5mbyhwbGFjZSwgdW5pdCk7XHJcbiAgY29uc3Qgd2VhdGhlckZvcmVjYXN0SW5mbyA9IGF3YWl0IGZldGNoV2VhdGhlckZvcmVjYXN0SW5mbyhwbGFjZSwgdW5pdCk7XHJcbiAgY29uc3QgZGVzZXJpYWxpemVkRGF5RGF0YSA9IGRlc2VyaWFsaXplV2VhdGhlckRheUluZm8od2VhdGhlckRheUluZm8pO1xyXG4gIGNvbnN0IGRlc2VyaWFsaXplZEZvcmVjYXN0RGF0YSA9XHJcbiAgICBkZXNlcmlhbGl6ZVdlYXRoZXJGb3JlY2FzdEluZm8od2VhdGhlckZvcmVjYXN0SW5mbyk7XHJcbiAgY3VycmVudFdlYXRoZXIoZGVzZXJpYWxpemVkRGF5RGF0YSk7XHJcbiAgZm9yZWNhc3RXZWF0aGVyKGRlc2VyaWFsaXplZEZvcmVjYXN0RGF0YSk7XHJcbiAgcmVtb3ZlTG9hZGluZygpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHNlYXJjaElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IHN3aXRjaEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL3N3aXRjaEJ1dHRvblwiO1xyXG5cclxuc3dpdGNoQnV0dG9uKCk7XHJcbnNlYXJjaElucHV0KCk7XHJcbmhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9