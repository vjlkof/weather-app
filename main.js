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

.forecasted-item > .icon {
  width: 50px;
  height: 50px;
  align-self: center;
}

.forecasted-item > .icon > img {
  width: 100%;
  align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,WAAW;EACX,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,iCAAiC;AACnC;;AAEA;EACE,yBAAyB,EAAE,2DAA2D;AACxF;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,0BAA0B;AAC5B;;AAEA;EACE;;GAEC,EAAE,0DAA0D;AAC/D;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;EACT,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,oCAAoC;EACpC,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,2CAA2C;EAC3C,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,WAAW;AACb;AACA;EACE,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB","sourcesContent":["html > * {\r\n  font-size: 16px;\r\n  margin: 0px;\r\n}\r\n\r\n@media (max-width: 1280px) {\r\n  html {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  html {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\nbody {\r\n  width: 80vw;\r\n  height: 100vh;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: skyblue;\r\n  gap: 10px;\r\n}\r\n\r\nh1 {\r\n  margin-bottom: 0px;\r\n}\r\n\r\nmain h1 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nmain h2 {\r\n  font-size: 2.6rem;\r\n}\r\nmain h3 {\r\n  font-size: 2rem;\r\n}\r\nmain h4 {\r\n  font-size: 1.4rem;\r\n}\r\nmain h5 {\r\n  font-size: 1.4rem;\r\n}\r\nmain h6 {\r\n  font-size: 0.9rem;\r\n}\r\nmain label {\r\n  font-size: 1rem;\r\n}\r\n\r\n.switch-container {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.switch-container > label {\r\n  font-weight: 600;\r\n  transition: opacity 0.5s ease;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.toggle-input {\r\n  display: none;\r\n}\r\n\r\n.toggle-label {\r\n  display: block;\r\n  background-color: #ccc;\r\n  border-radius: 17px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.toggle-input:checked + .toggle-label {\r\n  background-color: #4caf50; /* Change the background color when the switch is checked */\r\n}\r\n\r\n.toggle-label::before {\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 4px;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.toggle-input:checked + .toggle-label::before {\r\n  transform: translateX(\r\n    26px\r\n  ); /* Move the knob to the right when the switch is checked */\r\n}\r\n\r\n.search-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nlabel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n  height: 40px;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: rgb(216, 216, 216);\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  background-color: green;\r\n  border: none;\r\n  font-weight: 600;\r\n  border-radius: 50%;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n}\r\nbutton:hover {\r\n  color: white;\r\n  background-color: rgb(7, 156, 7);\r\n  cursor: pointer;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 0.6fr;\r\n  grid-template-rows: min-content min-content;\r\n  column-gap: 10px;\r\n  row-gap: 20px;\r\n}\r\n\r\n.left-side-data > * {\r\n  margin: 0px;\r\n}\r\n\r\n.left-side-data {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.right-side-data > * {\r\n  margin: 0px;\r\n}\r\n\r\n.right-side-data {\r\n  justify-self: flex-end;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.additional-item {\r\n  width: 100%;\r\n}\r\n.additional-item > * {\r\n  margin: 0px;\r\n  align-items: flex-start;\r\n}\r\n\r\n.forecasted > h3 {\r\n  margin: 10px 0px;\r\n}\r\n\r\n.forecasted {\r\n  grid-column: 1/-1;\r\n}\r\n\r\n.forecasted-data {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.forecasted-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n}\r\n\r\n.forecasted-item > * {\r\n  margin: 0px;\r\n}\r\n\r\n.forecasted-item > h4 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.forecasted-item > .icon {\r\n  width: 50px;\r\n  height: 50px;\r\n  align-self: center;\r\n}\r\n\r\n.forecasted-item > .icon > img {\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/components/searchInput.js":
/*!***************************************!*\
  !*** ./src/components/searchInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchInput)
/* harmony export */ });
/* harmony import */ var _helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/apiCalls */ "./src/helpers/apiCalls.js");


function searchInput() {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  let searchValue = "";

  console.log(searchInput);
  searchInput.addEventListener("input", () => {
    searchValue = searchInput.value;
    console.log(searchValue);
  });

  searchButton.addEventListener("click", async () => {
    const switchValue = document.getElementById("toggle").checked;
    const weatherDayInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherDayInfo)(searchValue, switchValue);
    const weatherForecastInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherForecastInfo)(
      searchValue,
      switchValue
    );

    console.log(weatherDayInfo);
    console.log("info-forcast", weatherForecastInfo);
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
function switchButton() {
  const switchInput = document.getElementById("toggle");
  const switchlabel = document.getElementById("unit");
  let switchValue = false;

  switchInput.addEventListener("click", () => {
    switchValue = !switchValue;
    switchlabel.classList.add("hidden");
    setTimeout(function () {
      switchlabel.textContent = switchValue ? "Fahrenheit" : "Celsius";
      switchlabel.classList.remove("hidden");
    }, 200);
    console.log(switchValue);
    console.log(switchlabel);
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
async function fetchWeatherDayInfo(place, unit) {
  // const key = "10a2265d56a248ec98a154831241801";
  const appid = "711c9633cb8ba6f4798e0bcf3f7e25b4";
  const defaultPlace = "Buenos Aires";
  const defaultUnit = unit ? "imperial" : "metric";

  console.log(
    "url",
    `https://api.openweathermap.org/data/2.5/weather?q=${
      place || defaultPlace
    }&appid=${appid}&units=${defaultUnit}`
  );
  // `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultPlace}`
  // const weatherDayInfo = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${
  //     place || defaultPlace
  //   }&appid=${appid}&units=${defaultUnit}`
  // );
  // return await weatherDayInfo.json();
}

async function fetchWeatherForecastInfo(place, unit) {
  // const key = "10a2265d56a248ec98a154831241801";
  const appid = "711c9633cb8ba6f4798e0bcf3f7e25b4";
  const defaultPlace = "Buenos Aires";
  const defaultUnit = unit ? "imperial" : "metric";

  console.log(
    "url",
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      place || defaultPlace
    }&appid=${appid}&units=${defaultUnit}`
  );
  // `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultPlace}`
  // const weatherDayInfo = await fetch(
  //   `https://api.openweathermap.org/data/2.5/forecast?q=${
  //     place || defaultPlace
  //   }&appid=${appid}&units=${defaultUnit}`
  // );
  // return await weatherDayInfo.json();
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
function deserializeWeatherDayInfo(weatherData) {
  weatherData = {
    coord: {
      lon: -0.13,
      lat: 51.51,
    },
    weather: [
      {
        id: 300,
        main: "Drizzle",
        description: "light intensity drizzle",
        icon: "09d",
      },
    ],
    base: "stations",
    main: {
      temp: 280.32,
      pressure: 1012,
      humidity: 81,
      temp_min: 279.15,
      temp_max: 281.15,
    },
    visibility: 10000,
    wind: {
      speed: 4.1,
      deg: 80,
    },
    clouds: {
      all: 90,
    },
    dt: 1485789600,
    sys: {
      type: 1,
      id: 5091,
      message: 0.0103,
      country: "GB",
      sunrise: 1485762037,
      sunset: 1485794875,
    },
    id: 2643743,
    name: "London",
    cod: 200,
  };
  const { name, coord, dt, weather, main, visibility, wind } = weatherData;
  const { main: condition, description, icon } = weather[0];
  const { temp, feels_like, humidity, pressure, temp_min, temp_max } = main;
  return {
    weatherDay: {
      name,
      coord,
      dt,
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
    },
  };
}

function deserializeWeatherForecastInfo(weatherForecastData) {
  weatherForecastData = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1647345600,
        main: {
          temp: 284.83,
          feels_like: 283.59,
          temp_min: 284.83,
          temp_max: 285.69,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 964,
          humidity: 59,
          temp_kf: -0.86,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.7,
          deg: 288,
          gust: 2.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-03-15 12:00:00",
      },
      {
        dt: 1647356400,
        main: {
          temp: 285.09,
          feels_like: 283.85,
          temp_min: 285.09,
          temp_max: 285.6,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 961,
          humidity: 58,
          temp_kf: -0.51,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.24,
          deg: 26,
          gust: 2.56,
        },
        visibility: 10000,
        pop: 0.26,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-03-15 15:00:00",
      },
      {
        dt: 1647367200,
        main: {
          temp: 283.03,
          feels_like: 281.89,
          temp_min: 282.13,
          temp_max: 283.03,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 961,
          humidity: 71,
          temp_kf: 0.9,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.41,
          deg: 169,
          gust: 4.81,
        },
        visibility: 10000,
        pop: 0.31,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-03-15 18:00:00",
      },
      {
        dt: 1647766800,
        main: {
          temp: 278.26,
          feels_like: 274.33,
          temp_min: 278.26,
          temp_max: 278.26,
          pressure: 1030,
          sea_level: 1030,
          grnd_level: 966,
          humidity: 54,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 18,
        },
        wind: {
          speed: 5.66,
          deg: 89,
          gust: 8.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-03-20 09:00:00",
      },
    ],
    city: {
      id: 2867714,
      name: "Munich",
      coord: {
        lat: 48.1374,
        lon: 11.5755,
      },
      country: "DE",
      population: 1260391,
      timezone: 3600,
      sunrise: 1647322046,
      sunset: 1647364681,
    },
  };
  const { city, list } = weatherForecastData;
  const { name } = city;
  const forecastedArray = list.map((forecastedItem) => {
    return {
      dt: forecastedItem.dt,
      dt_txt: forecastedItem.dt_txt,
      icon: `https://openweathermap.org/img/wn/${forecastedItem.weather[0].icon}@2x.png`,
      temp_min: forecastedItem.main.temp_min,
      temp_max: forecastedItem.main.temp_max,
    };
  });
  return {
    weatherforecasted: {
      name,
      forecastedArray,
    },
  };
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
/* harmony import */ var _helpers_apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/apiCalls */ "./src/helpers/apiCalls.js");
/* harmony import */ var _helpers_deserializers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/deserializers */ "./src/helpers/deserializers.js");
/* harmony import */ var _components_searchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/searchInput */ "./src/components/searchInput.js");
/* harmony import */ var _components_switchButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/switchButton */ "./src/components/switchButton.js");






(async function () {
  (0,_components_switchButton__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_components_searchInput__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const weatherDayInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherDayInfo)();
  console.log(weatherDayInfo);
  const weatherForecastInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchWeatherForecastInfo)();
  console.log(weatherForecastInfo);
  const deserializedDayData = (0,_helpers_deserializers__WEBPACK_IMPORTED_MODULE_2__.deserializeWeatherDayInfo)(weatherDayInfo);
  const deserializedForecastData =
    (0,_helpers_deserializers__WEBPACK_IMPORTED_MODULE_2__.deserializeWeatherForecastInfo)(weatherForecastInfo);
  console.log("info:", deserializedDayData);
  console.log("info-forecasted:", deserializedForecastData);
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyx3QkFBd0IsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLGlCQUFpQixPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxvQ0FBb0Msc0JBQXNCLGtCQUFrQixLQUFLLG9DQUFvQyxZQUFZLHdCQUF3QixPQUFPLEtBQUssbUNBQW1DLFlBQVksd0JBQXdCLE9BQU8sS0FBSyxjQUFjLGtCQUFrQixvQkFBb0IsbUJBQW1CLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGdDQUFnQyxnQkFBZ0IsS0FBSyxZQUFZLHlCQUF5QixLQUFLLGlCQUFpQixzQkFBc0IsdUJBQXVCLEtBQUssYUFBYSx3QkFBd0IsS0FBSyxhQUFhLHNCQUFzQixLQUFLLGFBQWEsd0JBQXdCLEtBQUssYUFBYSx3QkFBd0IsS0FBSyxhQUFhLHdCQUF3QixLQUFLLGdCQUFnQixzQkFBc0IsS0FBSywyQkFBMkIsa0JBQWtCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLGdDQUFnQyxLQUFLLG1DQUFtQyx1QkFBdUIsb0NBQW9DLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLGlCQUFpQix5QkFBeUIsNEJBQTRCLGtCQUFrQixtQkFBbUIsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssdUJBQXVCLHFCQUFxQiw2QkFBNkIsMEJBQTBCLHlCQUF5QixzQkFBc0IsYUFBYSxjQUFjLGVBQWUsZ0JBQWdCLHdDQUF3QyxLQUFLLCtDQUErQyxpQ0FBaUMsaUVBQWlFLCtCQUErQixvQkFBb0IsbUJBQW1CLGtCQUFrQiw4QkFBOEIseUJBQXlCLHlCQUF5QixlQUFlLGdCQUFnQixpQ0FBaUMsS0FBSyx1REFBdUQsaURBQWlELGdFQUFnRSwyQkFBMkIsb0JBQW9CLDhCQUE4QixLQUFLLGVBQWUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsZ0JBQWdCLEtBQUssMEJBQTBCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLGdCQUFnQixtQkFBbUIsS0FBSyxlQUFlLG1CQUFtQiwwQkFBMEIsbUJBQW1CLDJDQUEyQyxpREFBaUQsS0FBSyxnQkFBZ0IsbUJBQW1CLDhCQUE4QixtQkFBbUIsdUJBQXVCLHlCQUF5Qix3QkFBd0IseUJBQXlCLEtBQUssa0JBQWtCLG1CQUFtQix1Q0FBdUMsc0JBQXNCLEtBQUssa0JBQWtCLGtCQUFrQixLQUFLLGNBQWMsa0JBQWtCLG9CQUFvQix1Q0FBdUMsa0RBQWtELHVCQUF1QixvQkFBb0IsS0FBSyw2QkFBNkIsa0JBQWtCLEtBQUsseUJBQXlCLG9CQUFvQiw2QkFBNkIsa0JBQWtCLEtBQUssOEJBQThCLGtCQUFrQixLQUFLLDBCQUEwQiw2QkFBNkIsb0JBQW9CLDZCQUE2QixxQ0FBcUMsa0JBQWtCLEtBQUssMEJBQTBCLGtCQUFrQixLQUFLLDBCQUEwQixrQkFBa0IsOEJBQThCLEtBQUssMEJBQTBCLHVCQUF1QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSywwQkFBMEIsb0JBQW9CLHNCQUFzQixvQ0FBb0MsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2QixtQkFBbUIsS0FBSyw4QkFBOEIsa0JBQWtCLEtBQUssK0JBQStCLDBCQUEwQixLQUFLLGtDQUFrQyxrQkFBa0IsbUJBQW1CLHlCQUF5QixLQUFLLHdDQUF3QyxrQkFBa0IsMEJBQTBCLEtBQUssdUJBQXVCO0FBQ2ovTDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3pQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1Y2QjtBQUM3QjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0VBQW1CO0FBQ3BELHNDQUFzQywyRUFBd0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUMzQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDZk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsTUFBTSxTQUFTLFlBQVk7QUFDekM7QUFDQSxzREFBc0QsSUFBSSxLQUFLLGFBQWE7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsUUFBUSxTQUFTLE1BQU0sU0FBUyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsTUFBTSxTQUFTLFlBQVk7QUFDekM7QUFDQSxzREFBc0QsSUFBSSxLQUFLLGFBQWE7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsUUFBUSxTQUFTLE1BQU0sU0FBUyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbURBQW1EO0FBQzdELFVBQVUscUNBQXFDO0FBQy9DLFVBQVUsMkRBQTJEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCwrQkFBK0I7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7VUN4UEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFJTztBQUlLO0FBQ2tCO0FBQ0U7QUFDckQ7QUFDQTtBQUNBLEVBQUUsb0VBQVk7QUFDZCxFQUFFLG1FQUFXO0FBQ2IsK0JBQStCLHNFQUFtQjtBQUNsRDtBQUNBLG9DQUFvQywyRUFBd0I7QUFDNUQ7QUFDQSw4QkFBOEIsaUZBQXlCO0FBQ3ZEO0FBQ0EsSUFBSSxzRkFBOEI7QUFDbEM7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaElucHV0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc3dpdGNoQnV0dG9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlcnMvYXBpQ2FsbHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy9kZXNlcmlhbGl6ZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sID4gKiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5tYWluIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5tYWluIGgyIHtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxufVxyXG5tYWluIGgzIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxubWFpbiBoNCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxubWFpbiBoNSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxubWFpbiBoNiB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxubWFpbiBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc3dpdGNoLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc3dpdGNoLWNvbnRhaW5lciA+IGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnRvZ2dsZS1pbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZ2dsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLnRvZ2dsZS1pbnB1dDpjaGVja2VkICsgLnRvZ2dsZS1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIHN3aXRjaCBpcyBjaGVja2VkICovXHJcbn1cclxuXHJcbi50b2dnbGUtbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi50b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtbGFiZWw6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFxyXG4gICAgMjZweFxyXG4gICk7IC8qIE1vdmUgdGhlIGtub2IgdG8gdGhlIHJpZ2h0IHdoZW4gdGhlIHN3aXRjaCBpcyBjaGVja2VkICovXHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCA3KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAwLjZmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IG1pbi1jb250ZW50O1xyXG4gIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgcm93LWdhcDogMjBweDtcclxufVxyXG5cclxuLmxlZnQtc2lkZS1kYXRhID4gKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUtZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC40cmVtO1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZS1kYXRhID4gKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1zaWRlLWRhdGEge1xyXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFkZGl0aW9uYWwtaXRlbSA+ICoge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZCA+IGgzIHtcclxuICBtYXJnaW46IDEwcHggMHB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZCB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1pdGVtID4gKiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkLWl0ZW0gPiBoNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQtaXRlbSA+IC5pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1pdGVtID4gLmljb24gPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUIsRUFBRSwyREFBMkQ7QUFDeEY7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFOztHQUVDLEVBQUUsMERBQTBEO0FBQy9EOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQywyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCA+ICoge1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogODB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4gaDEge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxubWFpbiBoMiB7XFxyXFxuICBmb250LXNpemU6IDIuNnJlbTtcXHJcXG59XFxyXFxubWFpbiBoMyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbm1haW4gaDQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcbm1haW4gaDUge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcbm1haW4gaDYge1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcbm1haW4gbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3dpdGNoLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC1jb250YWluZXIgPiBsYWJlbCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aWR0aDogNjBweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtbGFiZWwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIHN3aXRjaCBpcyBjaGVja2VkICovXFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtbGFiZWw6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGhlaWdodDogMjZweDtcXHJcXG4gIHdpZHRoOiAyNnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDRweDtcXHJcXG4gIGxlZnQ6IDRweDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWlucHV0OmNoZWNrZWQgKyAudG9nZ2xlLWxhYmVsOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFxcclxcbiAgICAyNnB4XFxyXFxuICApOyAvKiBNb3ZlIHRoZSBrbm9iIHRvIHRoZSByaWdodCB3aGVuIHRoZSBzd2l0Y2ggaXMgY2hlY2tlZCAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDE1NiwgNyk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICByb3ctZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlLWRhdGEgPiAqIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlLWRhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUtZGF0YSA+ICoge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlLWRhdGEge1xcclxcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbmFsLWl0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hZGRpdGlvbmFsLWl0ZW0gPiAqIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkID4gaDMge1xcclxcbiAgbWFyZ2luOiAxMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWRhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZC1pdGVtID4gKiB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQtaXRlbSA+IGg0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWl0ZW0gPiAuaWNvbiB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQtaXRlbSA+IC5pY29uID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XHJcbiAgZmV0Y2hXZWF0aGVyRGF5SW5mbyxcclxuICBmZXRjaFdlYXRoZXJGb3JlY2FzdEluZm8sXHJcbn0gZnJvbSBcIi4uL2hlbHBlcnMvYXBpQ2FsbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaElucHV0KCkge1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XHJcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpO1xyXG4gIGxldCBzZWFyY2hWYWx1ZSA9IFwiXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKHNlYXJjaElucHV0KTtcclxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgc2VhcmNoVmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKHNlYXJjaFZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBzd2l0Y2hWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpLmNoZWNrZWQ7XHJcbiAgICBjb25zdCB3ZWF0aGVyRGF5SW5mbyA9IGF3YWl0IGZldGNoV2VhdGhlckRheUluZm8oc2VhcmNoVmFsdWUsIHN3aXRjaFZhbHVlKTtcclxuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEluZm8gPSBhd2FpdCBmZXRjaFdlYXRoZXJGb3JlY2FzdEluZm8oXHJcbiAgICAgIHNlYXJjaFZhbHVlLFxyXG4gICAgICBzd2l0Y2hWYWx1ZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF5SW5mbyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluZm8tZm9yY2FzdFwiLCB3ZWF0aGVyRm9yZWNhc3RJbmZvKTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzd2l0Y2hCdXR0b24oKSB7XHJcbiAgY29uc3Qgc3dpdGNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZVwiKTtcclxuICBjb25zdCBzd2l0Y2hsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidW5pdFwiKTtcclxuICBsZXQgc3dpdGNoVmFsdWUgPSBmYWxzZTtcclxuXHJcbiAgc3dpdGNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHN3aXRjaFZhbHVlID0gIXN3aXRjaFZhbHVlO1xyXG4gICAgc3dpdGNobGFiZWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICBzd2l0Y2hsYWJlbC50ZXh0Q29udGVudCA9IHN3aXRjaFZhbHVlID8gXCJGYWhyZW5oZWl0XCIgOiBcIkNlbHNpdXNcIjtcclxuICAgICAgc3dpdGNobGFiZWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH0sIDIwMCk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2l0Y2hWYWx1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhzd2l0Y2hsYWJlbCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlckRheUluZm8ocGxhY2UsIHVuaXQpIHtcclxuICAvLyBjb25zdCBrZXkgPSBcIjEwYTIyNjVkNTZhMjQ4ZWM5OGExNTQ4MzEyNDE4MDFcIjtcclxuICBjb25zdCBhcHBpZCA9IFwiNzExYzk2MzNjYjhiYTZmNDc5OGUwYmNmM2Y3ZTI1YjRcIjtcclxuICBjb25zdCBkZWZhdWx0UGxhY2UgPSBcIkJ1ZW5vcyBBaXJlc1wiO1xyXG4gIGNvbnN0IGRlZmF1bHRVbml0ID0gdW5pdCA/IFwiaW1wZXJpYWxcIiA6IFwibWV0cmljXCI7XHJcblxyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJ1cmxcIixcclxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XHJcbiAgICAgIHBsYWNlIHx8IGRlZmF1bHRQbGFjZVxyXG4gICAgfSZhcHBpZD0ke2FwcGlkfSZ1bml0cz0ke2RlZmF1bHRVbml0fWBcclxuICApO1xyXG4gIC8vIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9JHtrZXl9JnE9JHtkZWZhdWx0UGxhY2V9YFxyXG4gIC8vIGNvbnN0IHdlYXRoZXJEYXlJbmZvID0gYXdhaXQgZmV0Y2goXHJcbiAgLy8gICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke1xyXG4gIC8vICAgICBwbGFjZSB8fCBkZWZhdWx0UGxhY2VcclxuICAvLyAgIH0mYXBwaWQ9JHthcHBpZH0mdW5pdHM9JHtkZWZhdWx0VW5pdH1gXHJcbiAgLy8gKTtcclxuICAvLyByZXR1cm4gYXdhaXQgd2VhdGhlckRheUluZm8uanNvbigpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRm9yZWNhc3RJbmZvKHBsYWNlLCB1bml0KSB7XHJcbiAgLy8gY29uc3Qga2V5ID0gXCIxMGEyMjY1ZDU2YTI0OGVjOThhMTU0ODMxMjQxODAxXCI7XHJcbiAgY29uc3QgYXBwaWQgPSBcIjcxMWM5NjMzY2I4YmE2ZjQ3OThlMGJjZjNmN2UyNWI0XCI7XHJcbiAgY29uc3QgZGVmYXVsdFBsYWNlID0gXCJCdWVub3MgQWlyZXNcIjtcclxuICBjb25zdCBkZWZhdWx0VW5pdCA9IHVuaXQgPyBcImltcGVyaWFsXCIgOiBcIm1ldHJpY1wiO1xyXG5cclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwidXJsXCIsXHJcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtcclxuICAgICAgcGxhY2UgfHwgZGVmYXVsdFBsYWNlXHJcbiAgICB9JmFwcGlkPSR7YXBwaWR9JnVuaXRzPSR7ZGVmYXVsdFVuaXR9YFxyXG4gICk7XHJcbiAgLy8gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT0ke2tleX0mcT0ke2RlZmF1bHRQbGFjZX1gXHJcbiAgLy8gY29uc3Qgd2VhdGhlckRheUluZm8gPSBhd2FpdCBmZXRjaChcclxuICAvLyAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke1xyXG4gIC8vICAgICBwbGFjZSB8fCBkZWZhdWx0UGxhY2VcclxuICAvLyAgIH0mYXBwaWQ9JHthcHBpZH0mdW5pdHM9JHtkZWZhdWx0VW5pdH1gXHJcbiAgLy8gKTtcclxuICAvLyByZXR1cm4gYXdhaXQgd2VhdGhlckRheUluZm8uanNvbigpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZVdlYXRoZXJEYXlJbmZvKHdlYXRoZXJEYXRhKSB7XHJcbiAgd2VhdGhlckRhdGEgPSB7XHJcbiAgICBjb29yZDoge1xyXG4gICAgICBsb246IC0wLjEzLFxyXG4gICAgICBsYXQ6IDUxLjUxLFxyXG4gICAgfSxcclxuICAgIHdlYXRoZXI6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzMDAsXHJcbiAgICAgICAgbWFpbjogXCJEcml6emxlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwibGlnaHQgaW50ZW5zaXR5IGRyaXp6bGVcIixcclxuICAgICAgICBpY29uOiBcIjA5ZFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGJhc2U6IFwic3RhdGlvbnNcIixcclxuICAgIG1haW46IHtcclxuICAgICAgdGVtcDogMjgwLjMyLFxyXG4gICAgICBwcmVzc3VyZTogMTAxMixcclxuICAgICAgaHVtaWRpdHk6IDgxLFxyXG4gICAgICB0ZW1wX21pbjogMjc5LjE1LFxyXG4gICAgICB0ZW1wX21heDogMjgxLjE1LFxyXG4gICAgfSxcclxuICAgIHZpc2liaWxpdHk6IDEwMDAwLFxyXG4gICAgd2luZDoge1xyXG4gICAgICBzcGVlZDogNC4xLFxyXG4gICAgICBkZWc6IDgwLFxyXG4gICAgfSxcclxuICAgIGNsb3Vkczoge1xyXG4gICAgICBhbGw6IDkwLFxyXG4gICAgfSxcclxuICAgIGR0OiAxNDg1Nzg5NjAwLFxyXG4gICAgc3lzOiB7XHJcbiAgICAgIHR5cGU6IDEsXHJcbiAgICAgIGlkOiA1MDkxLFxyXG4gICAgICBtZXNzYWdlOiAwLjAxMDMsXHJcbiAgICAgIGNvdW50cnk6IFwiR0JcIixcclxuICAgICAgc3VucmlzZTogMTQ4NTc2MjAzNyxcclxuICAgICAgc3Vuc2V0OiAxNDg1Nzk0ODc1LFxyXG4gICAgfSxcclxuICAgIGlkOiAyNjQzNzQzLFxyXG4gICAgbmFtZTogXCJMb25kb25cIixcclxuICAgIGNvZDogMjAwLFxyXG4gIH07XHJcbiAgY29uc3QgeyBuYW1lLCBjb29yZCwgZHQsIHdlYXRoZXIsIG1haW4sIHZpc2liaWxpdHksIHdpbmQgfSA9IHdlYXRoZXJEYXRhO1xyXG4gIGNvbnN0IHsgbWFpbjogY29uZGl0aW9uLCBkZXNjcmlwdGlvbiwgaWNvbiB9ID0gd2VhdGhlclswXTtcclxuICBjb25zdCB7IHRlbXAsIGZlZWxzX2xpa2UsIGh1bWlkaXR5LCBwcmVzc3VyZSwgdGVtcF9taW4sIHRlbXBfbWF4IH0gPSBtYWluO1xyXG4gIHJldHVybiB7XHJcbiAgICB3ZWF0aGVyRGF5OiB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGNvb3JkLFxyXG4gICAgICBkdCxcclxuICAgICAgY29uZGl0aW9uLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgaWNvbjogYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2AsXHJcbiAgICAgIHRlbXAsXHJcbiAgICAgIGZlZWxzX2xpa2UsXHJcbiAgICAgIGh1bWlkaXR5LFxyXG4gICAgICBwcmVzc3VyZSxcclxuICAgICAgdGVtcF9taW4sXHJcbiAgICAgIHRlbXBfbWF4LFxyXG4gICAgICB2aXNpYmlsaXR5LFxyXG4gICAgICB3aW5kLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVXZWF0aGVyRm9yZWNhc3RJbmZvKHdlYXRoZXJGb3JlY2FzdERhdGEpIHtcclxuICB3ZWF0aGVyRm9yZWNhc3REYXRhID0ge1xyXG4gICAgY29kOiBcIjIwMFwiLFxyXG4gICAgbWVzc2FnZTogMCxcclxuICAgIGNudDogNDAsXHJcbiAgICBsaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICBkdDogMTY0NzM0NTYwMCxcclxuICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICB0ZW1wOiAyODQuODMsXHJcbiAgICAgICAgICBmZWVsc19saWtlOiAyODMuNTksXHJcbiAgICAgICAgICB0ZW1wX21pbjogMjg0LjgzLFxyXG4gICAgICAgICAgdGVtcF9tYXg6IDI4NS42OSxcclxuICAgICAgICAgIHByZXNzdXJlOiAxMDEzLFxyXG4gICAgICAgICAgc2VhX2xldmVsOiAxMDEzLFxyXG4gICAgICAgICAgZ3JuZF9sZXZlbDogOTY0LFxyXG4gICAgICAgICAgaHVtaWRpdHk6IDU5LFxyXG4gICAgICAgICAgdGVtcF9rZjogLTAuODYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3ZWF0aGVyOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA4MDQsXHJcbiAgICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcIjA0ZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNsb3Vkczoge1xyXG4gICAgICAgICAgYWxsOiAxMDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aW5kOiB7XHJcbiAgICAgICAgICBzcGVlZDogMC43LFxyXG4gICAgICAgICAgZGVnOiAyODgsXHJcbiAgICAgICAgICBndXN0OiAyLjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcclxuICAgICAgICBwb3A6IDAsXHJcbiAgICAgICAgc3lzOiB7XHJcbiAgICAgICAgICBwb2Q6IFwiZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHRfdHh0OiBcIjIwMjItMDMtMTUgMTI6MDA6MDBcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGR0OiAxNjQ3MzU2NDAwLFxyXG4gICAgICAgIG1haW46IHtcclxuICAgICAgICAgIHRlbXA6IDI4NS4wOSxcclxuICAgICAgICAgIGZlZWxzX2xpa2U6IDI4My44NSxcclxuICAgICAgICAgIHRlbXBfbWluOiAyODUuMDksXHJcbiAgICAgICAgICB0ZW1wX21heDogMjg1LjYsXHJcbiAgICAgICAgICBwcmVzc3VyZTogMTAxNixcclxuICAgICAgICAgIHNlYV9sZXZlbDogMTAxNixcclxuICAgICAgICAgIGdybmRfbGV2ZWw6IDk2MSxcclxuICAgICAgICAgIGh1bWlkaXR5OiA1OCxcclxuICAgICAgICAgIHRlbXBfa2Y6IC0wLjUxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2VhdGhlcjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogODA0LFxyXG4gICAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcclxuICAgICAgICAgICAgaWNvbjogXCIwNGRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjbG91ZHM6IHtcclxuICAgICAgICAgIGFsbDogMTAwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2luZDoge1xyXG4gICAgICAgICAgc3BlZWQ6IDIuMjQsXHJcbiAgICAgICAgICBkZWc6IDI2LFxyXG4gICAgICAgICAgZ3VzdDogMi41NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxyXG4gICAgICAgIHBvcDogMC4yNixcclxuICAgICAgICBzeXM6IHtcclxuICAgICAgICAgIHBvZDogXCJkXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdF90eHQ6IFwiMjAyMi0wMy0xNSAxNTowMDowMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZHQ6IDE2NDczNjcyMDAsXHJcbiAgICAgICAgbWFpbjoge1xyXG4gICAgICAgICAgdGVtcDogMjgzLjAzLFxyXG4gICAgICAgICAgZmVlbHNfbGlrZTogMjgxLjg5LFxyXG4gICAgICAgICAgdGVtcF9taW46IDI4Mi4xMyxcclxuICAgICAgICAgIHRlbXBfbWF4OiAyODMuMDMsXHJcbiAgICAgICAgICBwcmVzc3VyZTogMTAyMCxcclxuICAgICAgICAgIHNlYV9sZXZlbDogMTAyMCxcclxuICAgICAgICAgIGdybmRfbGV2ZWw6IDk2MSxcclxuICAgICAgICAgIGh1bWlkaXR5OiA3MSxcclxuICAgICAgICAgIHRlbXBfa2Y6IDAuOSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlYXRoZXI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgwNCxcclxuICAgICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXHJcbiAgICAgICAgICAgIGljb246IFwiMDRuXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY2xvdWRzOiB7XHJcbiAgICAgICAgICBhbGw6IDEwMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbmQ6IHtcclxuICAgICAgICAgIHNwZWVkOiAyLjQxLFxyXG4gICAgICAgICAgZGVnOiAxNjksXHJcbiAgICAgICAgICBndXN0OiA0LjgxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXHJcbiAgICAgICAgcG9wOiAwLjMxLFxyXG4gICAgICAgIHN5czoge1xyXG4gICAgICAgICAgcG9kOiBcIm5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR0X3R4dDogXCIyMDIyLTAzLTE1IDE4OjAwOjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBkdDogMTY0Nzc2NjgwMCxcclxuICAgICAgICBtYWluOiB7XHJcbiAgICAgICAgICB0ZW1wOiAyNzguMjYsXHJcbiAgICAgICAgICBmZWVsc19saWtlOiAyNzQuMzMsXHJcbiAgICAgICAgICB0ZW1wX21pbjogMjc4LjI2LFxyXG4gICAgICAgICAgdGVtcF9tYXg6IDI3OC4yNixcclxuICAgICAgICAgIHByZXNzdXJlOiAxMDMwLFxyXG4gICAgICAgICAgc2VhX2xldmVsOiAxMDMwLFxyXG4gICAgICAgICAgZ3JuZF9sZXZlbDogOTY2LFxyXG4gICAgICAgICAgaHVtaWRpdHk6IDU0LFxyXG4gICAgICAgICAgdGVtcF9rZjogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlYXRoZXI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgwMSxcclxuICAgICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiZmV3IGNsb3Vkc1wiLFxyXG4gICAgICAgICAgICBpY29uOiBcIjAyZFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNsb3Vkczoge1xyXG4gICAgICAgICAgYWxsOiAxOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbmQ6IHtcclxuICAgICAgICAgIHNwZWVkOiA1LjY2LFxyXG4gICAgICAgICAgZGVnOiA4OSxcclxuICAgICAgICAgIGd1c3Q6IDguMDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcclxuICAgICAgICBwb3A6IDAsXHJcbiAgICAgICAgc3lzOiB7XHJcbiAgICAgICAgICBwb2Q6IFwiZFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZHRfdHh0OiBcIjIwMjItMDMtMjAgMDk6MDA6MDBcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjaXR5OiB7XHJcbiAgICAgIGlkOiAyODY3NzE0LFxyXG4gICAgICBuYW1lOiBcIk11bmljaFwiLFxyXG4gICAgICBjb29yZDoge1xyXG4gICAgICAgIGxhdDogNDguMTM3NCxcclxuICAgICAgICBsb246IDExLjU3NTUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvdW50cnk6IFwiREVcIixcclxuICAgICAgcG9wdWxhdGlvbjogMTI2MDM5MSxcclxuICAgICAgdGltZXpvbmU6IDM2MDAsXHJcbiAgICAgIHN1bnJpc2U6IDE2NDczMjIwNDYsXHJcbiAgICAgIHN1bnNldDogMTY0NzM2NDY4MSxcclxuICAgIH0sXHJcbiAgfTtcclxuICBjb25zdCB7IGNpdHksIGxpc3QgfSA9IHdlYXRoZXJGb3JlY2FzdERhdGE7XHJcbiAgY29uc3QgeyBuYW1lIH0gPSBjaXR5O1xyXG4gIGNvbnN0IGZvcmVjYXN0ZWRBcnJheSA9IGxpc3QubWFwKChmb3JlY2FzdGVkSXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZHQ6IGZvcmVjYXN0ZWRJdGVtLmR0LFxyXG4gICAgICBkdF90eHQ6IGZvcmVjYXN0ZWRJdGVtLmR0X3R4dCxcclxuICAgICAgaWNvbjogYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ZvcmVjYXN0ZWRJdGVtLndlYXRoZXJbMF0uaWNvbn1AMngucG5nYCxcclxuICAgICAgdGVtcF9taW46IGZvcmVjYXN0ZWRJdGVtLm1haW4udGVtcF9taW4sXHJcbiAgICAgIHRlbXBfbWF4OiBmb3JlY2FzdGVkSXRlbS5tYWluLnRlbXBfbWF4LFxyXG4gICAgfTtcclxuICB9KTtcclxuICByZXR1cm4ge1xyXG4gICAgd2VhdGhlcmZvcmVjYXN0ZWQ6IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZm9yZWNhc3RlZEFycmF5LFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hXZWF0aGVyRGF5SW5mbyxcclxuICBmZXRjaFdlYXRoZXJGb3JlY2FzdEluZm8sXHJcbn0gZnJvbSBcIi4vaGVscGVycy9hcGlDYWxsc1wiO1xyXG5pbXBvcnQge1xyXG4gIGRlc2VyaWFsaXplV2VhdGhlckRheUluZm8sXHJcbiAgZGVzZXJpYWxpemVXZWF0aGVyRm9yZWNhc3RJbmZvLFxyXG59IGZyb20gXCIuL2hlbHBlcnMvZGVzZXJpYWxpemVyc1wiO1xyXG5pbXBvcnQgc2VhcmNoSW5wdXQgZnJvbSBcIi4vY29tcG9uZW50cy9zZWFyY2hJbnB1dFwiO1xyXG5pbXBvcnQgc3dpdGNoQnV0dG9uIGZyb20gXCIuL2NvbXBvbmVudHMvc3dpdGNoQnV0dG9uXCI7XHJcblxyXG4oYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIHN3aXRjaEJ1dHRvbigpO1xyXG4gIHNlYXJjaElucHV0KCk7XHJcbiAgY29uc3Qgd2VhdGhlckRheUluZm8gPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXlJbmZvKCk7XHJcbiAgY29uc29sZS5sb2cod2VhdGhlckRheUluZm8pO1xyXG4gIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEluZm8gPSBhd2FpdCBmZXRjaFdlYXRoZXJGb3JlY2FzdEluZm8oKTtcclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRm9yZWNhc3RJbmZvKTtcclxuICBjb25zdCBkZXNlcmlhbGl6ZWREYXlEYXRhID0gZGVzZXJpYWxpemVXZWF0aGVyRGF5SW5mbyh3ZWF0aGVyRGF5SW5mbyk7XHJcbiAgY29uc3QgZGVzZXJpYWxpemVkRm9yZWNhc3REYXRhID1cclxuICAgIGRlc2VyaWFsaXplV2VhdGhlckZvcmVjYXN0SW5mbyh3ZWF0aGVyRm9yZWNhc3RJbmZvKTtcclxuICBjb25zb2xlLmxvZyhcImluZm86XCIsIGRlc2VyaWFsaXplZERheURhdGEpO1xyXG4gIGNvbnNvbGUubG9nKFwiaW5mby1mb3JlY2FzdGVkOlwiLCBkZXNlcmlhbGl6ZWRGb3JlY2FzdERhdGEpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=