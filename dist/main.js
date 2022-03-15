/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_utils_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../src/utils/view.js */ \"./src/utils/view.js\");\n/* harmony import */ var _css_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/tailwind.css */ \"./src/css/tailwind.css\");\n\n //const urlApi = \"https://api.adviceslip.com/advice\"\n\n(0,_src_utils_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/*\r\nlet quotesId = document.getElementById(\"quotes\")\r\n\r\nconsole.log(\"holaaa\")\r\n\r\nconst fetchData = async() => {\r\n\r\n    try {\r\n        const apidata = await fetch(urlApi)\r\n        const api = await apidata.json()\r\n        letquotes = api.slip.advice\r\n        console.log(quotes, \"apiiiiii\")\r\n        quotesId.innerHTML = `${quotes}`\r\n\r\n\r\n    } catch (e) {\r\n        console.log(e)\r\n    }\r\n\r\n    console.log(quotes, \"frases\")\r\n\r\n}\r\n\r\nfetchData()*/\n\n//# sourceURL=webpack://advice-generator-app-main/./src/index.js?");

/***/ }),

/***/ "./src/utils/view.js":
/*!***************************!*\
  !*** ./src/utils/view.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconsole.log(\"bueeeehh\");\n\nvar render = function render() {\n  document.innerHTML = \"\\n     <div>\\n\\n     <div>\\n     <p>ADVICE #177</p>\\n     <p id=\\\"quotes\\\"></p>\\n\\n     \\n     </div>\\n     \\n     </div>\\n    \\n    \";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://advice-generator-app-main/./src/utils/view.js?");

/***/ }),

/***/ "./src/css/tailwind.css":
/*!******************************!*\
  !*** ./src/css/tailwind.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://advice-generator-app-main/./src/css/tailwind.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;