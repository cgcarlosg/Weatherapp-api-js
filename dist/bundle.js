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

eval("const api = {\r\n    key: \"a012917c99ef51c392b259e302401f8c\",\r\n    base: \"https://api.openweathermap.org/data/2.5/\"\r\n}\r\n\r\nconst searchbox = document.querySelector('.search-box');\r\nsearchbox.addEventListener('keypress', setQuery);\r\n\r\nfunction setQuery(evt) {\r\n    if (evt.keyCode == 13) {\r\n        getResults(searchbox.value);\r\n    }\r\n}\r\n\r\nfunction getResults (query) {\r\n    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)\r\n    .then(weather => {\r\n        return weather.json();\r\n    }).then(displayResults);\r\n}\r\n\r\nfunction displayResults (weather) {\r\n    console.log(weather);\r\n    const city = document.querySelector('.location .city');\r\n    city.innerText = `${weather.name}, ${weather.sys.country}`;\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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