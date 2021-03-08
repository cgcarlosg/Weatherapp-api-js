/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const api = {\r\n    key: \"f56dca24ce05c3835045624436d6a8e8\",\r\n    base: \"https://api.openweathermap.org/data/2.5\"\r\n}\r\n\r\nconst searchbox = document.querySelector('.search-box');\r\nsearchbox.addEventListener('keypress', setQuery);\r\n\r\nfunction setQuery(evt) {\r\n    if (evt.keyCode == 13) {\r\n//        getResults(searchbox.value);\r\n        console.log(searchbox.value);\r\n        searchbox.value = '';\r\n    }\r\n}\r\n\r\nfunction getResults (query) {\r\n    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)\r\n    .then(weather => {\r\n        return weather.json();\r\n    }).then(displayResults);\r\n}\r\n\r\nfunction displayResults (weather) {\r\n    console.log(weather);\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;