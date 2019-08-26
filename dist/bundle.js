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

/***/ "./src/components/main.component.js":
/*!******************************************!*\
  !*** ./src/components/main.component.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component */ \"./src/lib/Component.js\");\n/* harmony import */ var _section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.component */ \"./src/components/section.component.js\");\n\n // const strings = {\n//   title: 'Hello World!'\n// };\n// const template = `<p>${strings.title}</p>`;\n// const main = new Component({\n//   elementName: 'div',\n//   className: 'main',\n//   content: section\n// });\n// export default main;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  console.log('test!');\n  var main = document.createElement('div');\n  main.className = 'main';\n  main.appendChild(Object(_section_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  return main;\n});\n\n//# sourceURL=webpack:///./src/components/main.component.js?");

/***/ }),

/***/ "./src/components/section.component.js":
/*!*********************************************!*\
  !*** ./src/components/section.component.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component */ \"./src/lib/Component.js\");\n // const section = new Component({ elementName: 'div', className: 'section' });\n// export default section;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var section = document.createElement('div');\n  section.className = 'section';\n  section.innerHTML = \"<h2>Section!</h2>\";\n  return section;\n});\n\n//# sourceURL=webpack:///./src/components/section.component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main.component */ \"./src/components/main.component.js\");\n\ndocument.getElementById('root').appendChild(Object(_components_main_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/Component.js":
/*!******************************!*\
  !*** ./src/lib/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Component =\n/*#__PURE__*/\nfunction () {\n  function Component(_ref) {\n    var elementName = _ref.elementName,\n        className = _ref.className,\n        content = _ref.content;\n\n    _classCallCheck(this, Component);\n\n    this.el = elementName;\n    this.className = className;\n    this.content = content;\n  }\n\n  _createClass(Component, [{\n    key: \"render\",\n    value: function render() {\n      var element = document.createElement(this.el);\n      element.className = this.className;\n      if (this.content) element.appendChild = this.content.render();\n      return element;\n    }\n  }]);\n\n  return Component;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n//# sourceURL=webpack:///./src/lib/Component.js?");

/***/ })

/******/ });