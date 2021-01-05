/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _text_nowrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-nowrap */ \"./src/text-nowrap.js\");\n/* harmony import */ var _text_nowrap_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-nowrap-observer */ \"./src/text-nowrap-observer.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n\r\n  for(let i=0; i < 100; i++) {\r\n    let newElement = document.createElement('figure')\r\n    newElement.innerHTML = getRandomContent()\r\n    newElement.style.fontSize = \"5rem\"\r\n    document.body.appendChild(newElement)\r\n    new _text_nowrap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newElement)\r\n\r\n    let newTwoLines = document.createElement('figure')\r\n    newTwoLines.innerHTML = getRandomContent(200, 100)\r\n    newTwoLines.style.fontSize = \"5rem\"\r\n    newTwoLines.style.borderColor = \"red\"\r\n    document.body.appendChild(newTwoLines)\r\n    new _text_nowrap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTwoLines, {\r\n      lines: 2\r\n    })\r\n  }\r\n\r\n  _text_nowrap_observer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bind('.test')\r\n\r\n})\r\n\r\nfunction getRandomContent(maxLength=100, minLength=10){\r\n  let alpha = 'aazertyuiopqsdfghjklmwxcvbn       '.split('')\r\n  let length = Math.floor(Math.random() * (maxLength - minLength)) + minLength\r\n  let content = ''\r\n  for(let i = 0; i < length; i++) {\r\n    content += alpha[Math.floor(Math.random()*alpha.length)]\r\n  }\r\n  return content\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/text-nowrap-observer.js":
/*!*************************************!*\
  !*** ./src/text-nowrap-observer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextNowrapObserver; });\n/* harmony import */ var _text_nowrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-nowrap */ \"./src/text-nowrap.js\");\n\r\nclass TextNowrapObserver {\r\n\r\n  /**\r\n   * Bind all element.querySelectorAll(selector)\r\n   */\r\n  static bind(selector, element=null){\r\n    if(!element) element = document.body\r\n    if(!element) return;\r\n    let targets = [...element.querySelectorAll(selector)]\r\n    if(targets.length) targets.map(t => new _text_nowrap__WEBPACK_IMPORTED_MODULE_0__[\"default\"](t))\r\n  }\r\n\r\n  /**\r\n   * Observe given element and bind when updated\r\n   */\r\n  static observe(selector, element=null){\r\n    if(!element) element = document.body\r\n    if(!element) return;\r\n\r\n    TextNowrapObserver.bind(selector, element)\r\n\r\n    (new MutationObserver((mutations)=>{\r\n      for(let mutation of mutations) {\r\n        if(mutation.type == 'childList') {\r\n          TextNowrapObserver.bind(selector, mutation.target)\r\n        }\r\n      }\r\n    })).observe(element, {\r\n      childList: true, subtree: true\r\n    })\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/text-nowrap-observer.js?");

/***/ }),

/***/ "./src/text-nowrap.js":
/*!****************************!*\
  !*** ./src/text-nowrap.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TextNowrap; });\nclass TextNowrap {\r\n\r\n    constructor(element, options){\r\n      this.options = Object.assign({\r\n        lines: 1\r\n      }, options)\r\n\r\n      this.element = element\r\n      this.baseContent = element.innerHTML\r\n      this.baseStyles = window.getComputedStyle(element)\r\n      this.baseFontSize = parseFloat(this.baseStyles['font-size'].replace('px', ''))\r\n      this.currentFontSize = this.baseFontSize\r\n\r\n      this.resize()\r\n      setTimeout(()=>{\r\n        this.resize()\r\n      }, 1000)\r\n    }\r\n\r\n    resize(){\r\n      while(this.isMultiline() && this.currentFontSize > 1){\r\n        this.currentFontSize--\r\n        this.applyFontSize()\r\n      }\r\n    }\r\n\r\n    isMultiline(){\r\n      this.element.innerHTML = 'y'\r\n      this.singleLineHeight = this.element.getBoundingClientRect().height\r\n\r\n      this.element.innerHTML = this.baseContent\r\n      this.currentHeight = this.element.getBoundingClientRect().height\r\n      return (this.singleLineHeight * this.options.lines < this.currentHeight)\r\n    }\r\n\r\n    applyFontSize(){\r\n      this.element.style.fontSize = this.currentFontSize + 'px'\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/text-nowrap.js?");

/***/ })

/******/ });