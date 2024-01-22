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

#error {
  color: rgb(177, 3, 3);
  margin: 0px;
  font-weight: 400;
}

#content {
  width: 100%;
  display: flex;
  flex: 1;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html > * {\r\n  font-size: 16px;\r\n  margin: 0px;\r\n}\r\n\r\n@media (max-width: 1280px) {\r\n  html {\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  html {\r\n    font-size: 10px;\r\n  }\r\n}\r\n\r\nbody {\r\n  width: 80vw;\r\n  height: 100vh;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: skyblue;\r\n  gap: 10px;\r\n}\r\n\r\nh1 {\r\n  margin-bottom: 0px;\r\n}\r\n\r\nmain h1 {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n}\r\nmain h2 {\r\n  font-size: 2.6rem;\r\n}\r\nmain h3 {\r\n  font-size: 2rem;\r\n}\r\nmain h4 {\r\n  font-size: 1.4rem;\r\n  text-transform: capitalize;\r\n}\r\nmain h5 {\r\n  font-size: 1.4rem;\r\n}\r\nmain h6 {\r\n  font-size: 0.9rem;\r\n}\r\nmain label {\r\n  font-size: 1rem;\r\n}\r\n\r\n.switch-container {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.switch-container > label {\r\n  font-weight: 600;\r\n  transition: opacity 0.5s ease;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n.toggle-input {\r\n  display: none;\r\n}\r\n\r\n.toggle-label {\r\n  display: block;\r\n  background-color: #ccc;\r\n  border-radius: 17px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.toggle-input:checked + .toggle-label {\r\n  background-color: #4caf50; /* Change the background color when the switch is checked */\r\n}\r\n\r\n.toggle-label::before {\r\n  content: \"\";\r\n  height: 26px;\r\n  width: 26px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  top: 4px;\r\n  left: 4px;\r\n  transition: transform 0.3s;\r\n}\r\n\r\n.toggle-input:checked + .toggle-label::before {\r\n  transform: translateX(\r\n    26px\r\n  ); /* Move the knob to the right when the switch is checked */\r\n}\r\n\r\n.search-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nlabel {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.input-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  gap: 10px;\r\n  height: 40px;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  border-radius: 10px;\r\n  padding: 5px;\r\n  background-color: rgb(216, 216, 216);\r\n  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nbutton {\r\n  color: white;\r\n  background-color: green;\r\n  border: none;\r\n  font-weight: 600;\r\n  border-radius: 50%;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n}\r\nbutton:hover {\r\n  color: white;\r\n  background-color: rgb(7, 156, 7);\r\n  cursor: pointer;\r\n}\r\n\r\n#error {\r\n  color: rgb(177, 3, 3);\r\n  margin: 0px;\r\n  font-weight: 400;\r\n}\r\n\r\n#content {\r\n  width: 100%;\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 0.6fr;\r\n  grid-template-rows: min-content min-content;\r\n  column-gap: 10px;\r\n  row-gap: 20px;\r\n}\r\n\r\n.left-side-data > * {\r\n  margin: 0px;\r\n}\r\n\r\n.left-side-data {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.4rem;\r\n}\r\n\r\n.right-side-data > * {\r\n  margin: 0px;\r\n}\r\n\r\n.right-side-data {\r\n  justify-self: flex-end;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.additional-item {\r\n  width: 100%;\r\n}\r\n.additional-item > * {\r\n  margin: 0px;\r\n  align-items: flex-start;\r\n}\r\n\r\n.forecasted > h3 {\r\n  margin: 10px 0px;\r\n}\r\n\r\n.forecasted {\r\n  grid-column: 1/-1;\r\n}\r\n\r\n.forecasted-data {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.forecasted-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 5px;\r\n}\r\n\r\n.forecasted-item > * {\r\n  margin: 0px;\r\n}\r\n\r\n.forecasted-item > h4 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.forecasted-item > .forecasted-icon {\r\n  width: 50px;\r\n  height: 50px;\r\n  align-self: center;\r\n}\r\n\r\n.forecasted-item > .forecasted-icon > img {\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n#loading-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.loading {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
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
    event.preventDefault();
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

/***/ "./src/helpers/showErrorMessage.js":
/*!*****************************************!*\
  !*** ./src/helpers/showErrorMessage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeErrorMessage: () => (/* binding */ removeErrorMessage),
/* harmony export */   showErrorMessage: () => (/* binding */ showErrorMessage)
/* harmony export */ });
function showErrorMessage(message) {
  const errorElement = document.getElementById("error");
  errorElement.textContent = message;
}

function removeErrorMessage() {
  const errorElement = document.getElementById("error");
  errorElement.textContent = "";
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
/* harmony import */ var _helpers_showErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/showErrorMessage */ "./src/helpers/showErrorMessage.js");







async function home(place, unit) {
  try {
    (0,_components_loading__WEBPACK_IMPORTED_MODULE_4__.loading)();
    (0,_helpers_showErrorMessage__WEBPACK_IMPORTED_MODULE_5__.removeErrorMessage)();
    const weatherDayInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherDayInfo)(place, unit);
    const weatherForecastInfo = await (0,_helpers_apiCalls__WEBPACK_IMPORTED_MODULE_0__.fetchWeatherForecastInfo)(place, unit);
    const deserializedDayData = (0,_helpers_deserializers__WEBPACK_IMPORTED_MODULE_1__.deserializeWeatherDayInfo)(weatherDayInfo);
    const deserializedForecastData =
      (0,_helpers_deserializers__WEBPACK_IMPORTED_MODULE_1__.deserializeWeatherForecastInfo)(weatherForecastInfo);
    (0,_components_currentWeather__WEBPACK_IMPORTED_MODULE_2__["default"])(deserializedDayData);
    (0,_components_forecastWeather__WEBPACK_IMPORTED_MODULE_3__["default"])(deserializedForecastData);
  } catch (error) {
    (0,_helpers_showErrorMessage__WEBPACK_IMPORTED_MODULE_5__.showErrorMessage)("Please introduce a valid place and check again!");
  } finally {
    (0,_components_loading__WEBPACK_IMPORTED_MODULE_4__.removeLoading)();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUs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Q0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUsT0FBTztBQUNqQjtBQUNBLG1CQUFtQixzRUFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQyw4QkFBOEIsc0VBQXlCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDclNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDZCO0FBSUs7QUFDd0I7QUFDRTtBQUNHO0FBSTFCO0FBQ3JDO0FBQ2U7QUFDZjtBQUNBLElBQUksNERBQU87QUFDWCxJQUFJLDZFQUFrQjtBQUN0QixpQ0FBaUMsc0VBQW1CO0FBQ3BELHNDQUFzQywyRUFBd0I7QUFDOUQsZ0NBQWdDLGlGQUF5QjtBQUN6RDtBQUNBLE1BQU0sc0ZBQThCO0FBQ3BDLElBQUksc0VBQWM7QUFDbEIsSUFBSSx1RUFBZTtBQUNuQixJQUFJO0FBQ0osSUFBSSwyRUFBZ0I7QUFDcEIsSUFBSTtBQUNKLElBQUksa0VBQWE7QUFDakI7QUFDQTs7Ozs7OztVQ2hDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ1c7QUFDbUI7QUFDRTtBQUNyRDtBQUNBLG9FQUFZO0FBQ1osbUVBQVc7QUFDWCx1REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY3VycmVudFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9mb3JlY2FzdFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9sb2FkaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9zd2l0Y2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXJzL2NvbnZlcnRVbml4VGltZVRvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaGVscGVycy9kZXNlcmlhbGl6ZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlcnMvc2hvd0Vycm9yTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sID4gKiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHdpZHRoOiA4MHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5tYWluIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5tYWluIGgyIHtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxufVxyXG5tYWluIGgzIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxubWFpbiBoNCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxubWFpbiBoNSB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxubWFpbiBoNiB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxubWFpbiBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uc3dpdGNoLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uc3dpdGNoLWNvbnRhaW5lciA+IGxhYmVsIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxufVxyXG5cclxuLnRvZ2dsZS1pbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZ2dsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLnRvZ2dsZS1pbnB1dDpjaGVja2VkICsgLnRvZ2dsZS1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIHN3aXRjaCBpcyBjaGVja2VkICovXHJcbn1cclxuXHJcbi50b2dnbGUtbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XHJcbn1cclxuXHJcbi50b2dnbGUtaW5wdXQ6Y2hlY2tlZCArIC50b2dnbGUtbGFiZWw6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFxyXG4gICAgMjZweFxyXG4gICk7IC8qIE1vdmUgdGhlIGtub2IgdG8gdGhlIHJpZ2h0IHdoZW4gdGhlIHN3aXRjaCBpcyBjaGVja2VkICovXHJcbn1cclxuXHJcbi5zZWFyY2gtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjE2LCAyMTYpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgMTU2LCA3KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgY29sb3I6IHJnYigxNzcsIDMsIDMpO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMC42ZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcclxuICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gIHJvdy1nYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5sZWZ0LXNpZGUtZGF0YSA+ICoge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubGVmdC1zaWRlLWRhdGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNHJlbTtcclxufVxyXG5cclxuLnJpZ2h0LXNpZGUtZGF0YSA+ICoge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ucmlnaHQtc2lkZS1kYXRhIHtcclxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hZGRpdGlvbmFsLWl0ZW0gPiAqIHtcclxuICBtYXJnaW46IDBweDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQgPiBoMyB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweDtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQge1xyXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1kYXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZvcmVjYXN0ZWQtaXRlbSA+ICoge1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1pdGVtID4gaDQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5mb3JlY2FzdGVkLWl0ZW0gPiAuZm9yZWNhc3RlZC1pY29uIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9yZWNhc3RlZC1pdGVtID4gLmZvcmVjYXN0ZWQtaWNvbiA+IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2xvYWRpbmctY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VB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XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xcclxcbiAgaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHdpZHRoOiA4MHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBoMSB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5tYWluIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi42cmVtO1xcclxcbn1cXHJcXG5tYWluIGgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxubWFpbiBoNCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5tYWluIGg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5tYWluIGg2IHtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5tYWluIGxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gtY29udGFpbmVyID4gbGFiZWwge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zd2l0Y2gge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUtaW5wdXQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWlucHV0OmNoZWNrZWQgKyAudG9nZ2xlLWxhYmVsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7IC8qIENoYW5nZSB0aGUgYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBzd2l0Y2ggaXMgY2hlY2tlZCAqL1xcclxcbn1cXHJcXG5cXHJcXG4udG9nZ2xlLWxhYmVsOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBoZWlnaHQ6IDI2cHg7XFxyXFxuICB3aWR0aDogMjZweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA0cHg7XFxyXFxuICBsZWZ0OiA0cHg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZ2dsZS1pbnB1dDpjaGVja2VkICsgLnRvZ2dsZS1sYWJlbDo6YmVmb3JlIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChcXHJcXG4gICAgMjZweFxcclxcbiAgKTsgLyogTW92ZSB0aGUga25vYiB0byB0aGUgcmlnaHQgd2hlbiB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XFxyXFxuICBib3gtc2hhZG93OiAwcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAxNTYsIDcpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZXJyb3Ige1xcclxcbiAgY29sb3I6IHJnYigxNzcsIDMsIDMpO1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuNmZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCBtaW4tY29udGVudDtcXHJcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxyXFxuICByb3ctZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlLWRhdGEgPiAqIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1zaWRlLWRhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXNpZGUtZGF0YSA+ICoge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1zaWRlLWRhdGEge1xcclxcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbmFsLWl0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5hZGRpdGlvbmFsLWl0ZW0gPiAqIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkID4gaDMge1xcclxcbiAgbWFyZ2luOiAxMHB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWRhdGEge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZC1pdGVtID4gKiB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0ZWQtaXRlbSA+IGg0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdGVkLWl0ZW0gPiAuZm9yZWNhc3RlZC1pY29uIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3RlZC1pdGVtID4gLmZvcmVjYXN0ZWQtaWNvbiA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb2FkaW5nLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2FkaW5nIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyZW50V2VhdGhlcih3ZWF0aGVyRGF5SW5mbykge1xyXG4gIGNvbnN0IGNvbmRpdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmRpdGlvblwiKTtcclxuICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcclxuICBjb25zdCBkYXRldGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGV0aW1lXCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC10ZW1wXCIpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XHJcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbi1pbWdcIik7XHJcbiAgY29uc3QgbWluTWF4RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWluLW1heFwiKTtcclxuICBjb25zdCBmZWVsc0xpa2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlXCIpO1xyXG4gIGNvbnN0IEh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3QgcHJlc3N1cmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKTtcclxuICBjb25zdCB2aXNpYmlsaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJpbGl0eVwiKTtcclxuICBjb25zdCB3aW5kU3BlZWRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kLXNwZWVkXCIpO1xyXG5cclxuICBjb25kaXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRheUluZm8uY29uZGl0aW9uO1xyXG4gIG5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRheUluZm8ubmFtZTtcclxuICBkYXRldGltZUVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF5SW5mby5kdDtcclxuICBjdXJyZW50VGVtcEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF5SW5mby50ZW1wIHx8IFwiLVwifSDCsCBgO1xyXG4gIGRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXlJbmZvLmRlc2NyaXB0aW9uO1xyXG4gIGltZ0VsZW1lbnQuc3JjID0gd2VhdGhlckRheUluZm8uaWNvbjtcclxuICBtaW5NYXhFbGVtZW50LnRleHRDb250ZW50ID0gYE1pbiAke3dlYXRoZXJEYXlJbmZvLnRlbXBfbWluIHx8IFwiLVwifSDCsCAtIE1heCAke1xyXG4gICAgd2VhdGhlckRheUluZm8udGVtcF9tYXggfHwgXCItXCJcclxuICB9IMKwYDtcclxuICBmZWVsc0xpa2VFbGVtZW50LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRheUluZm8uZmVlbHNfbGlrZSB8fCBcIi1cIn0gwrBgO1xyXG4gIEh1bWlkaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXlJbmZvLmh1bWlkaXR5IHx8IFwiLVwifSAlYDtcclxuICBwcmVzc3VyZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF5SW5mby5wcmVzc3VyZSB8fCBcIi1cIn0gaHBgO1xyXG4gIHZpc2liaWxpdHlFbGVtZW50LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChcclxuICAgIHdlYXRoZXJEYXlJbmZvLnZpc2liaWxpdHkgLyAxMDAwXHJcbiAgKX0ga20gYDtcclxuICB3aW5kU3BlZWRFbGVtZW50LnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRheUluZm8ud2luZC5zcGVlZCB8fCBcIi1cIn0ga20vaGA7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9yZWNhc3RXZWF0aGVyKGZvcmVjYXN0ZWRXZWF0aGVyKSB7XHJcbiAgY29uc3QgZm9yZWNhc3RlZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0ZWRcIik7XHJcbiAgbGV0IGZvcmVjYXN0ZWREYXRhRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RlZC1kYXRhXCIpO1xyXG4gIGZvcmVjYXN0ZWRTZWN0aW9uLnJlbW92ZUNoaWxkKGZvcmVjYXN0ZWREYXRhRWxlbWVudCk7XHJcbiAgZm9yZWNhc3RlZERhdGFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb3JlY2FzdGVkRGF0YUVsZW1lbnQuY2xhc3NOYW1lID0gXCJmb3JlY2FzdGVkLWRhdGFcIjtcclxuICBmb3JlY2FzdGVkU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JlY2FzdGVkRGF0YUVsZW1lbnQpO1xyXG5cclxuICBmb3JlY2FzdGVkV2VhdGhlci5mb3JlY2FzdGVkQXJyYXkuZm9yRWFjaCgoZGF5SXRlbSkgPT4ge1xyXG4gICAgY29uc3QgZm9yZWNhc3RlZEl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZvcmVjYXN0ZWREYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gICAgY29uc3QgZm9yZWNhc3RlZE1heEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgICBjb25zdCBmb3JlY2FzdGVkTWluRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcclxuICAgIGNvbnN0IGRpdkZvcmVjYXN0ZWRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZvcmVjYXN0ZWRJbWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgICBmb3JlY2FzdGVkSXRlbUVsZW1lbnQuY2xhc3NOYW1lID0gXCJmb3JlY2FzdGVkLWl0ZW1cIjtcclxuICAgIGZvcmVjYXN0ZWREYXlFbGVtZW50LnRleHRDb250ZW50ID0gZGF5SXRlbT8uZHQ7XHJcbiAgICBmb3JlY2FzdGVkTWF4RWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RheUl0ZW0/LnRlbXBfbWF4IHx8IFwiLVwifSDCsGA7XHJcbiAgICBmb3JlY2FzdGVkTWluRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2RheUl0ZW0/LnRlbXBfbWluIHx8IFwiLVwifSDCsGA7XHJcbiAgICBkaXZGb3JlY2FzdGVkSWNvbi5jbGFzc05hbWUgPSBcImZvcmVjYXN0ZWQtaWNvblwiO1xyXG4gICAgZm9yZWNhc3RlZEltZ0VsZW1lbnQuc3JjID0gZGF5SXRlbT8uaWNvbjtcclxuICAgIGZvcmVjYXN0ZWRJbWdFbGVtZW50LmFsdCA9IGRheUl0ZW0/LmNvbmRpdGlvbiB8fCBcIm4vYVwiO1xyXG4gICAgZGl2Rm9yZWNhc3RlZEljb24uYXBwZW5kQ2hpbGQoZm9yZWNhc3RlZEltZ0VsZW1lbnQpO1xyXG4gICAgZm9yZWNhc3RlZEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGZvcmVjYXN0ZWREYXlFbGVtZW50KTtcclxuICAgIGZvcmVjYXN0ZWRJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChmb3JlY2FzdGVkTWF4RWxlbWVudCk7XHJcbiAgICBmb3JlY2FzdGVkSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9yZWNhc3RlZE1pbkVsZW1lbnQpO1xyXG4gICAgZm9yZWNhc3RlZEl0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdkZvcmVjYXN0ZWRJY29uKTtcclxuXHJcbiAgICBmb3JlY2FzdGVkRGF0YUVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9yZWNhc3RlZEl0ZW1FbGVtZW50KTtcclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbG9hZGluZygpIHtcclxuICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuICBjb25zdCBsb2FkaW5nRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaDFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICBtYWluRWxlbWVudC5jbGFzc05hbWUgPSBcImxvYWRpbmdcIjtcclxuICBoMUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkxvYWRpbmcuLi5cIjtcclxuICBsb2FkaW5nRGl2RWxlbWVudC5pZCA9IFwibG9hZGluZy1jb250YWluZXJcIjtcclxuXHJcbiAgbG9hZGluZ0RpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoaDFFbGVtZW50KTtcclxuICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChsb2FkaW5nRGl2RWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMb2FkaW5nKCkge1xyXG4gIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1haW5FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xyXG4gIGNvbnN0IGxvYWRpbmdEaXZFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nLWNvbnRhaW5lclwiKTtcclxuICBtYWluRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcclxuICBjb250ZW50RWxlbWVudC5yZW1vdmVDaGlsZChsb2FkaW5nRGl2RWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlYXJjaElucHV0KCkge1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XHJcbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpO1xyXG4gIGxldCBzZWFyY2hWYWx1ZSA9IFwiXCI7XHJcblxyXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICBzZWFyY2hWYWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlO1xyXG4gIH0pO1xyXG5cclxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBzd2l0Y2hWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpLmNoZWNrZWQ7XHJcbiAgICBob21lKHNlYXJjaFZhbHVlLCBzd2l0Y2hWYWx1ZSk7XHJcbiAgICBzZWFyY2hJbnB1dC5kYXRhc2V0Lm9sZFZhbHVlID0gc2VhcmNoVmFsdWU7XHJcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IGhvbWUgZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN3aXRjaEJ1dHRvbigpIHtcclxuICBjb25zdCBzd2l0Y2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpO1xyXG4gIGNvbnN0IHN3aXRjaGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bml0XCIpO1xyXG4gIGxldCBzd2l0Y2hWYWx1ZSA9IGZhbHNlO1xyXG5cclxuICBzd2l0Y2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcclxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gc2VhcmNoSW5wdXQuZGF0YXNldC5vbGRWYWx1ZSB8fCBcIlwiO1xyXG4gICAgc3dpdGNoVmFsdWUgPSAhc3dpdGNoVmFsdWU7XHJcbiAgICBzd2l0Y2hsYWJlbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHN3aXRjaGxhYmVsLnRleHRDb250ZW50ID0gc3dpdGNoVmFsdWUgPyBcIkZhaHJlbmhlaXRcIiA6IFwiQ2Vsc2l1c1wiO1xyXG4gICAgICBzd2l0Y2hsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgfSwgMjAwKTtcclxuICAgIGhvbWUoc2VhcmNoVmFsdWUsIHN3aXRjaFZhbHVlKTtcclxuICB9KTtcclxufVxyXG4iLCIvLyBjb25zdCBrZXkgPSBcIjEwYTIyNjVkNTZhMjQ4ZWM5OGExNTQ4MzEyNDE4MDFcIjtcclxuY29uc3QgYXBwaWQgPSBcIjcxMWM5NjMzY2I4YmE2ZjQ3OThlMGJjZjNmN2UyNWI0XCI7XHJcbmNvbnN0IGRlZmF1bHRQbGFjZSA9IFwiQnVlbm9zIEFpcmVzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF5SW5mbyhwbGFjZSA9IG51bGwsIHVuaXQgPSBudWxsKSB7XHJcbiAgY29uc3QgZGVmYXVsdFVuaXQgPSB1bml0ID8gXCJpbXBlcmlhbFwiIDogXCJtZXRyaWNcIjtcclxuXHJcbiAgY29uc3Qgd2VhdGhlckRheUluZm8gPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7XHJcbiAgICAgIHBsYWNlIHx8IGRlZmF1bHRQbGFjZVxyXG4gICAgfSZhcHBpZD0ke2FwcGlkfSZ1bml0cz0ke2RlZmF1bHRVbml0fWBcclxuICApO1xyXG4gIHJldHVybiBhd2FpdCB3ZWF0aGVyRGF5SW5mby5qc29uKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJGb3JlY2FzdEluZm8ocGxhY2UsIHVuaXQpIHtcclxuICBjb25zdCBkZWZhdWx0VW5pdCA9IHVuaXQgPyBcImltcGVyaWFsXCIgOiBcIm1ldHJpY1wiO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyRm9yZWNhc3RJbmZvID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtcclxuICAgICAgcGxhY2UgfHwgZGVmYXVsdFBsYWNlXHJcbiAgICB9JmFwcGlkPSR7YXBwaWR9JnVuaXRzPSR7ZGVmYXVsdFVuaXR9YFxyXG4gICk7XHJcbiAgcmV0dXJuIGF3YWl0IHdlYXRoZXJGb3JlY2FzdEluZm8uanNvbigpO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnZlcnRVbml4VGltZVRvRGF0ZVRpbWUoZGF0ZUluVW5peCkge1xyXG4gIGNvbnN0IHRpbWVzdGFtcEluTWlsbGlzZWNvbmRzID0gZGF0ZUluVW5peCAqIDEwMDA7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcEluTWlsbGlzZWNvbmRzKTtcclxuICBjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTsgLy8gU2F0dXJkYXlcclxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkuc2xpY2UoLTIpOyAvLyAyMDI0ID0+IDI0XHJcbiAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vIDEwXHJcbiAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vIDE0XHJcbiAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyAzMFxyXG4gIGNvbnN0IGZvcm1hdHRlZERhdGVUaW1lID0gYCR7ZGF5fSAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZS5nZXREYXRlKCl9ICR7aG91cnN9OiR7bWludXRlc31oc2A7XHJcblxyXG4gIHJldHVybiB7IGZvcm1hdHRlZERhdGVUaW1lLCBmb3JtYXR0ZWREYXk6IGRheSB9O1xyXG59XHJcbiIsImltcG9ydCBjb252ZXJ0VW5peFRpbWVUb0RhdGVUaW1lIGZyb20gXCIuL2NvbnZlcnRVbml4VGltZVRvRGF0ZVRpbWVcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplV2VhdGhlckRheUluZm8od2VhdGhlckRhdGEpIHtcclxuICAvLyB3ZWF0aGVyRGF0YSA9IHtcclxuICAvLyAgIGNvb3JkOiB7XHJcbiAgLy8gICAgIGxvbjogLTAuMTMsXHJcbiAgLy8gICAgIGxhdDogNTEuNTEsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgd2VhdGhlcjogW1xyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgaWQ6IDMwMCxcclxuICAvLyAgICAgICBtYWluOiBcIkRyaXp6bGVcIixcclxuICAvLyAgICAgICBkZXNjcmlwdGlvbjogXCJsaWdodCBpbnRlbnNpdHkgZHJpenpsZVwiLFxyXG4gIC8vICAgICAgIGljb246IFwiMDlkXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICBdLFxyXG4gIC8vICAgYmFzZTogXCJzdGF0aW9uc1wiLFxyXG4gIC8vICAgbWFpbjoge1xyXG4gIC8vICAgICB0ZW1wOiAyODAuMzIsXHJcbiAgLy8gICAgIHByZXNzdXJlOiAxMDEyLFxyXG4gIC8vICAgICBodW1pZGl0eTogODEsXHJcbiAgLy8gICAgIHRlbXBfbWluOiAyNzkuMTUsXHJcbiAgLy8gICAgIHRlbXBfbWF4OiAyODEuMTUsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgdmlzaWJpbGl0eTogMTAwMDAsXHJcbiAgLy8gICB3aW5kOiB7XHJcbiAgLy8gICAgIHNwZWVkOiA0LjEsXHJcbiAgLy8gICAgIGRlZzogODAsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgY2xvdWRzOiB7XHJcbiAgLy8gICAgIGFsbDogOTAsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgZHQ6IDE0ODU3ODk2MDAsXHJcbiAgLy8gICBzeXM6IHtcclxuICAvLyAgICAgdHlwZTogMSxcclxuICAvLyAgICAgaWQ6IDUwOTEsXHJcbiAgLy8gICAgIG1lc3NhZ2U6IDAuMDEwMyxcclxuICAvLyAgICAgY291bnRyeTogXCJHQlwiLFxyXG4gIC8vICAgICBzdW5yaXNlOiAxNDg1NzYyMDM3LFxyXG4gIC8vICAgICBzdW5zZXQ6IDE0ODU3OTQ4NzUsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAgaWQ6IDI2NDM3NDMsXHJcbiAgLy8gICBuYW1lOiBcIkxvbmRvblwiLFxyXG4gIC8vICAgY29kOiAyMDAsXHJcbiAgLy8gfTtcclxuICBjb25zdCB7IG5hbWUsIGNvb3JkLCBkdCwgd2VhdGhlciwgbWFpbiwgdmlzaWJpbGl0eSwgd2luZCB9ID0gd2VhdGhlckRhdGE7XHJcbiAgY29uc3QgeyBtYWluOiBjb25kaXRpb24sIGRlc2NyaXB0aW9uLCBpY29uIH0gPSB3ZWF0aGVyWzBdO1xyXG4gIGNvbnN0IHsgdGVtcCwgZmVlbHNfbGlrZSwgaHVtaWRpdHksIHByZXNzdXJlLCB0ZW1wX21pbiwgdGVtcF9tYXggfSA9IG1haW47XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBjb29yZCxcclxuICAgIGR0OiBjb252ZXJ0VW5peFRpbWVUb0RhdGVUaW1lKGR0KS5mb3JtYXR0ZWREYXRlVGltZSxcclxuICAgIGNvbmRpdGlvbixcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgaWNvbjogYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259QDJ4LnBuZ2AsXHJcbiAgICB0ZW1wLFxyXG4gICAgZmVlbHNfbGlrZSxcclxuICAgIGh1bWlkaXR5LFxyXG4gICAgcHJlc3N1cmUsXHJcbiAgICB0ZW1wX21pbixcclxuICAgIHRlbXBfbWF4LFxyXG4gICAgdmlzaWJpbGl0eSxcclxuICAgIHdpbmQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplV2VhdGhlckZvcmVjYXN0SW5mbyh3ZWF0aGVyRm9yZWNhc3REYXRhKSB7XHJcbiAgLy8gd2VhdGhlckZvcmVjYXN0RGF0YSA9IHtcclxuICAvLyAgIGNvZDogXCIyMDBcIixcclxuICAvLyAgIG1lc3NhZ2U6IDAsXHJcbiAgLy8gICBjbnQ6IDQwLFxyXG4gIC8vICAgbGlzdDogW1xyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgZHQ6IDE2NDczNDU2MDAsXHJcbiAgLy8gICAgICAgbWFpbjoge1xyXG4gIC8vICAgICAgICAgdGVtcDogMjg0LjgzLFxyXG4gIC8vICAgICAgICAgZmVlbHNfbGlrZTogMjgzLjU5LFxyXG4gIC8vICAgICAgICAgdGVtcF9taW46IDI4NC44MyxcclxuICAvLyAgICAgICAgIHRlbXBfbWF4OiAyODUuNjksXHJcbiAgLy8gICAgICAgICBwcmVzc3VyZTogMTAxMyxcclxuICAvLyAgICAgICAgIHNlYV9sZXZlbDogMTAxMyxcclxuICAvLyAgICAgICAgIGdybmRfbGV2ZWw6IDk2NCxcclxuICAvLyAgICAgICAgIGh1bWlkaXR5OiA1OSxcclxuICAvLyAgICAgICAgIHRlbXBfa2Y6IC0wLjg2LFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgd2VhdGhlcjogW1xyXG4gIC8vICAgICAgICAge1xyXG4gIC8vICAgICAgICAgICBpZDogODA0LFxyXG4gIC8vICAgICAgICAgICBtYWluOiBcIkNsb3Vkc1wiLFxyXG4gIC8vICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJvdmVyY2FzdCBjbG91ZHNcIixcclxuICAvLyAgICAgICAgICAgaWNvbjogXCIwNGRcIixcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgXSxcclxuICAvLyAgICAgICBjbG91ZHM6IHtcclxuICAvLyAgICAgICAgIGFsbDogMTAwLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgd2luZDoge1xyXG4gIC8vICAgICAgICAgc3BlZWQ6IDAuNyxcclxuICAvLyAgICAgICAgIGRlZzogMjg4LFxyXG4gIC8vICAgICAgICAgZ3VzdDogMi4xLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXHJcbiAgLy8gICAgICAgcG9wOiAwLFxyXG4gIC8vICAgICAgIHN5czoge1xyXG4gIC8vICAgICAgICAgcG9kOiBcImRcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGR0X3R4dDogXCIyMDIyLTAzLTE1IDEyOjAwOjAwXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIHtcclxuICAvLyAgICAgICBkdDogMTY0NzM1NjQwMCxcclxuICAvLyAgICAgICBtYWluOiB7XHJcbiAgLy8gICAgICAgICB0ZW1wOiAyODUuMDksXHJcbiAgLy8gICAgICAgICBmZWVsc19saWtlOiAyODMuODUsXHJcbiAgLy8gICAgICAgICB0ZW1wX21pbjogMjg1LjA5LFxyXG4gIC8vICAgICAgICAgdGVtcF9tYXg6IDI4NS42LFxyXG4gIC8vICAgICAgICAgcHJlc3N1cmU6IDEwMTYsXHJcbiAgLy8gICAgICAgICBzZWFfbGV2ZWw6IDEwMTYsXHJcbiAgLy8gICAgICAgICBncm5kX2xldmVsOiA5NjEsXHJcbiAgLy8gICAgICAgICBodW1pZGl0eTogNTgsXHJcbiAgLy8gICAgICAgICB0ZW1wX2tmOiAtMC41MSxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHdlYXRoZXI6IFtcclxuICAvLyAgICAgICAgIHtcclxuICAvLyAgICAgICAgICAgaWQ6IDgwNCxcclxuICAvLyAgICAgICAgICAgbWFpbjogXCJDbG91ZHNcIixcclxuICAvLyAgICAgICAgICAgZGVzY3JpcHRpb246IFwib3ZlcmNhc3QgY2xvdWRzXCIsXHJcbiAgLy8gICAgICAgICAgIGljb246IFwiMDRkXCIsXHJcbiAgLy8gICAgICAgICB9LFxyXG4gIC8vICAgICAgIF0sXHJcbiAgLy8gICAgICAgY2xvdWRzOiB7XHJcbiAgLy8gICAgICAgICBhbGw6IDEwMCxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHdpbmQ6IHtcclxuICAvLyAgICAgICAgIHNwZWVkOiAyLjI0LFxyXG4gIC8vICAgICAgICAgZGVnOiAyNixcclxuICAvLyAgICAgICAgIGd1c3Q6IDIuNTYsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB2aXNpYmlsaXR5OiAxMDAwMCxcclxuICAvLyAgICAgICBwb3A6IDAuMjYsXHJcbiAgLy8gICAgICAgc3lzOiB7XHJcbiAgLy8gICAgICAgICBwb2Q6IFwiZFwiLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgZHRfdHh0OiBcIjIwMjItMDMtMTUgMTU6MDA6MDBcIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAge1xyXG4gIC8vICAgICAgIGR0OiAxNjQ3MzY3MjAwLFxyXG4gIC8vICAgICAgIG1haW46IHtcclxuICAvLyAgICAgICAgIHRlbXA6IDI4My4wMyxcclxuICAvLyAgICAgICAgIGZlZWxzX2xpa2U6IDI4MS44OSxcclxuICAvLyAgICAgICAgIHRlbXBfbWluOiAyODIuMTMsXHJcbiAgLy8gICAgICAgICB0ZW1wX21heDogMjgzLjAzLFxyXG4gIC8vICAgICAgICAgcHJlc3N1cmU6IDEwMjAsXHJcbiAgLy8gICAgICAgICBzZWFfbGV2ZWw6IDEwMjAsXHJcbiAgLy8gICAgICAgICBncm5kX2xldmVsOiA5NjEsXHJcbiAgLy8gICAgICAgICBodW1pZGl0eTogNzEsXHJcbiAgLy8gICAgICAgICB0ZW1wX2tmOiAwLjksXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB3ZWF0aGVyOiBbXHJcbiAgLy8gICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgIGlkOiA4MDQsXHJcbiAgLy8gICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXHJcbiAgLy8gICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIm92ZXJjYXN0IGNsb3Vkc1wiLFxyXG4gIC8vICAgICAgICAgICBpY29uOiBcIjA0blwiLFxyXG4gIC8vICAgICAgICAgfSxcclxuICAvLyAgICAgICBdLFxyXG4gIC8vICAgICAgIGNsb3Vkczoge1xyXG4gIC8vICAgICAgICAgYWxsOiAxMDAsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB3aW5kOiB7XHJcbiAgLy8gICAgICAgICBzcGVlZDogMi40MSxcclxuICAvLyAgICAgICAgIGRlZzogMTY5LFxyXG4gIC8vICAgICAgICAgZ3VzdDogNC44MSxcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIHZpc2liaWxpdHk6IDEwMDAwLFxyXG4gIC8vICAgICAgIHBvcDogMC4zMSxcclxuICAvLyAgICAgICBzeXM6IHtcclxuICAvLyAgICAgICAgIHBvZDogXCJuXCIsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICBkdF90eHQ6IFwiMjAyMi0wMy0xNSAxODowMDowMFwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICB7XHJcbiAgLy8gICAgICAgZHQ6IDE2NDc3NjY4MDAsXHJcbiAgLy8gICAgICAgbWFpbjoge1xyXG4gIC8vICAgICAgICAgdGVtcDogMjc4LjI2LFxyXG4gIC8vICAgICAgICAgZmVlbHNfbGlrZTogMjc0LjMzLFxyXG4gIC8vICAgICAgICAgdGVtcF9taW46IDI3OC4yNixcclxuICAvLyAgICAgICAgIHRlbXBfbWF4OiAyNzguMjYsXHJcbiAgLy8gICAgICAgICBwcmVzc3VyZTogMTAzMCxcclxuICAvLyAgICAgICAgIHNlYV9sZXZlbDogMTAzMCxcclxuICAvLyAgICAgICAgIGdybmRfbGV2ZWw6IDk2NixcclxuICAvLyAgICAgICAgIGh1bWlkaXR5OiA1NCxcclxuICAvLyAgICAgICAgIHRlbXBfa2Y6IDAsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB3ZWF0aGVyOiBbXHJcbiAgLy8gICAgICAgICB7XHJcbiAgLy8gICAgICAgICAgIGlkOiA4MDEsXHJcbiAgLy8gICAgICAgICAgIG1haW46IFwiQ2xvdWRzXCIsXHJcbiAgLy8gICAgICAgICAgIGRlc2NyaXB0aW9uOiBcImZldyBjbG91ZHNcIixcclxuICAvLyAgICAgICAgICAgaWNvbjogXCIwMmRcIixcclxuICAvLyAgICAgICAgIH0sXHJcbiAgLy8gICAgICAgXSxcclxuICAvLyAgICAgICBjbG91ZHM6IHtcclxuICAvLyAgICAgICAgIGFsbDogMTgsXHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgICB3aW5kOiB7XHJcbiAgLy8gICAgICAgICBzcGVlZDogNS42NixcclxuICAvLyAgICAgICAgIGRlZzogODksXHJcbiAgLy8gICAgICAgICBndXN0OiA4LjAxLFxyXG4gIC8vICAgICAgIH0sXHJcbiAgLy8gICAgICAgdmlzaWJpbGl0eTogMTAwMDAsXHJcbiAgLy8gICAgICAgcG9wOiAwLFxyXG4gIC8vICAgICAgIHN5czoge1xyXG4gIC8vICAgICAgICAgcG9kOiBcImRcIixcclxuICAvLyAgICAgICB9LFxyXG4gIC8vICAgICAgIGR0X3R4dDogXCIyMDIyLTAzLTIwIDA5OjAwOjAwXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICBdLFxyXG4gIC8vICAgY2l0eToge1xyXG4gIC8vICAgICBpZDogMjg2NzcxNCxcclxuICAvLyAgICAgbmFtZTogXCJNdW5pY2hcIixcclxuICAvLyAgICAgY29vcmQ6IHtcclxuICAvLyAgICAgICBsYXQ6IDQ4LjEzNzQsXHJcbiAgLy8gICAgICAgbG9uOiAxMS41NzU1LFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBjb3VudHJ5OiBcIkRFXCIsXHJcbiAgLy8gICAgIHBvcHVsYXRpb246IDEyNjAzOTEsXHJcbiAgLy8gICAgIHRpbWV6b25lOiAzNjAwLFxyXG4gIC8vICAgICBzdW5yaXNlOiAxNjQ3MzIyMDQ2LFxyXG4gIC8vICAgICBzdW5zZXQ6IDE2NDczNjQ2ODEsXHJcbiAgLy8gICB9LFxyXG4gIC8vIH07XHJcbiAgY29uc3QgeyBjaXR5LCBsaXN0IH0gPSB3ZWF0aGVyRm9yZWNhc3REYXRhO1xyXG4gIGNvbnN0IHsgbmFtZSB9ID0gY2l0eTtcclxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgdG9kYXlEYXkgPSBjb252ZXJ0VW5peFRpbWVUb0RhdGVUaW1lKFxyXG4gICAgTWF0aC5mbG9vcihjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLyAxMDAwKVxyXG4gICkuZm9ybWF0dGVkRGF5O1xyXG4gIGxldCBkdEF1eCA9IFwiXCI7XHJcbiAgbGV0IG1pbkF1eCA9IFwiXCI7XHJcbiAgbGV0IG1heEF1eCA9IFwiXCI7XHJcbiAgbGV0IGljb25BdXggPSBcIlwiO1xyXG4gIGxldCBjb25kaXRpb25BdXggPSBcIlwiO1xyXG4gIGNvbnN0IGZvcmVjYXN0ZWRBcnJheSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjb252ZXJ0ZWRGb3JlY2FzdER0ID0gY29udmVydFVuaXhUaW1lVG9EYXRlVGltZShcclxuICAgICAgbGlzdFtpXS5kdFxyXG4gICAgKS5mb3JtYXR0ZWREYXk7XHJcblxyXG4gICAgaWYgKGNvbnZlcnRlZEZvcmVjYXN0RHQgPT09IHRvZGF5RGF5KSB7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb252ZXJ0ZWRGb3JlY2FzdER0ID09PSBkdEF1eCkge1xyXG4gICAgICBpZiAobGlzdFtpXS5tYWluLnRlbXBfbWluIDwgbWluQXV4KSB7XHJcbiAgICAgICAgbWluQXV4ID0gbGlzdFtpXS5tYWluLnRlbXBfbWluO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChsaXN0W2ldLm1haW4udGVtcF9tYXggPiBtYXhBdXgpIHtcclxuICAgICAgICBtYXhBdXggPSBsaXN0W2ldLm1haW4udGVtcF9tYXg7XHJcbiAgICAgICAgaWNvbkF1eCA9IGxpc3RbaV0ud2VhdGhlclswXS5pY29uO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjb252ZXJ0ZWRGb3JlY2FzdER0ICE9PSBkdEF1eCkge1xyXG4gICAgICBpZiAoZHRBdXggIT09IFwiXCIpIHtcclxuICAgICAgICBmb3JlY2FzdGVkQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICBkdDogZHRBdXgsXHJcbiAgICAgICAgICBpY29uOiBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkF1eH1AMngucG5nYCxcclxuICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uQXV4LFxyXG4gICAgICAgICAgdGVtcF9taW46IG1pbkF1eCxcclxuICAgICAgICAgIHRlbXBfbWF4OiBtYXhBdXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZHRBdXggPSBjb252ZXJ0ZWRGb3JlY2FzdER0O1xyXG4gICAgICBtaW5BdXggPSBsaXN0W2ldLm1haW4udGVtcF9taW47XHJcbiAgICAgIG1heEF1eCA9IGxpc3RbaV0ubWFpbi50ZW1wX21heDtcclxuICAgICAgaWNvbkF1eCA9IGxpc3RbaV0ud2VhdGhlclswXS5pY29uO1xyXG4gICAgICBjb25kaXRpb25BdXggPSBsaXN0W2ldLndlYXRoZXJbMF0ubWFpbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcmVjYXN0ZWRBcnJheS5wdXNoKHtcclxuICAgIGR0OiBkdEF1eCxcclxuICAgIGljb246IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQXV4fUAyeC5wbmdgLFxyXG4gICAgY29uZGl0aW9uOiBjb25kaXRpb25BdXgsXHJcbiAgICB0ZW1wX21pbjogbWluQXV4LFxyXG4gICAgdGVtcF9tYXg6IG1heEF1eCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICBmb3JlY2FzdGVkQXJyYXksXHJcbiAgfTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yTWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgY29uc3QgZXJyb3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKTtcclxuICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXJyb3JNZXNzYWdlKCkge1xyXG4gIGNvbnN0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIik7XHJcbiAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGZldGNoV2VhdGhlckRheUluZm8sXHJcbiAgZmV0Y2hXZWF0aGVyRm9yZWNhc3RJbmZvLFxyXG59IGZyb20gXCIuLi9oZWxwZXJzL2FwaUNhbGxzXCI7XHJcbmltcG9ydCB7XHJcbiAgZGVzZXJpYWxpemVXZWF0aGVyRGF5SW5mbyxcclxuICBkZXNlcmlhbGl6ZVdlYXRoZXJGb3JlY2FzdEluZm8sXHJcbn0gZnJvbSBcIi4uL2hlbHBlcnMvZGVzZXJpYWxpemVyc1wiO1xyXG5pbXBvcnQgY3VycmVudFdlYXRoZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY3VycmVudFdlYXRoZXJcIjtcclxuaW1wb3J0IGZvcmVjYXN0V2VhdGhlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JlY2FzdFdlYXRoZXJcIjtcclxuaW1wb3J0IHsgbG9hZGluZywgcmVtb3ZlTG9hZGluZyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRpbmdcIjtcclxuaW1wb3J0IHtcclxuICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gIHJlbW92ZUVycm9yTWVzc2FnZSxcclxufSBmcm9tIFwiLi4vaGVscGVycy9zaG93RXJyb3JNZXNzYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBob21lKHBsYWNlLCB1bml0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGxvYWRpbmcoKTtcclxuICAgIHJlbW92ZUVycm9yTWVzc2FnZSgpO1xyXG4gICAgY29uc3Qgd2VhdGhlckRheUluZm8gPSBhd2FpdCBmZXRjaFdlYXRoZXJEYXlJbmZvKHBsYWNlLCB1bml0KTtcclxuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdEluZm8gPSBhd2FpdCBmZXRjaFdlYXRoZXJGb3JlY2FzdEluZm8ocGxhY2UsIHVuaXQpO1xyXG4gICAgY29uc3QgZGVzZXJpYWxpemVkRGF5RGF0YSA9IGRlc2VyaWFsaXplV2VhdGhlckRheUluZm8od2VhdGhlckRheUluZm8pO1xyXG4gICAgY29uc3QgZGVzZXJpYWxpemVkRm9yZWNhc3REYXRhID1cclxuICAgICAgZGVzZXJpYWxpemVXZWF0aGVyRm9yZWNhc3RJbmZvKHdlYXRoZXJGb3JlY2FzdEluZm8pO1xyXG4gICAgY3VycmVudFdlYXRoZXIoZGVzZXJpYWxpemVkRGF5RGF0YSk7XHJcbiAgICBmb3JlY2FzdFdlYXRoZXIoZGVzZXJpYWxpemVkRm9yZWNhc3REYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgc2hvd0Vycm9yTWVzc2FnZShcIlBsZWFzZSBpbnRyb2R1Y2UgYSB2YWxpZCBwbGFjZSBhbmQgY2hlY2sgYWdhaW4hXCIpO1xyXG4gIH0gZmluYWxseSB7XHJcbiAgICByZW1vdmVMb2FkaW5nKCk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IHNlYXJjaElucHV0IGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IHN3aXRjaEJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL3N3aXRjaEJ1dHRvblwiO1xyXG5cclxuc3dpdGNoQnV0dG9uKCk7XHJcbnNlYXJjaElucHV0KCk7XHJcbmhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9