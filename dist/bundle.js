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

eval("const unitToggle = document.querySelector('[data-unit-toggle]')\nconst metricRadio = document.getElementById('cel')\nconst imperialRadio = document.getElementById('fah')\n\nconst isMetric = () => {\n\treturn metricRadio.checked\n}\n\nunitToggle.addEventListener('click', () => {\n  let metricUnits = !isMetric()\n  metricRadio.checked = metricUnits\n  imperialRadio.checked = !metricUnits\n})\n\n\nconst api = {\n  key: 'a012917c99ef51c392b259e302401f8c',\n  base: 'https://api.openweathermap.org/data/2.5/',\n};\n\nconst searchbox = document.querySelector('.search-box');\n\nconst dateBuilder = (d) => {\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'thurs', 'Fri', 'Sat'];\n\n  const day = days[d.getDay()];\n  const date = d.getDate();\n  const month = months[d.getMonth()];\n  const year = d.getFullYear();\n\n  return `${day} ${date} ${month} ${year}`;\n}\n\nconst displayResults = (weather) => {\n  const city = document.querySelector('.location .city');\n  city.innerText = `${weather.name}, ${weather.sys.country}`;\n\n  const now = new Date();\n  const date = document.querySelector('.location .date');\n  date.innerText = dateBuilder(now);\n\n  const temp = document.querySelector('.current .temp');\n  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;\n\n  const weatherEl = document.querySelector('.current .weather');\n  weatherEl.innerText = weather.weather[0].main;\n\n  const hilow = document.querySelector('.hi-low');\n  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;\n}\n\nconst getResults = (query) => {\n  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)\n    .then(weather => weather.json()).then(displayResults);\n\n    unitToggle.addEventListener('click', () => {\n      unitToggle.classList.toggle('active')\n    })\n}\n\nconst setQuery = (evt) => {\n  if (evt.keyCode === 13) {\n    getResults(searchbox.value);\n  }\n}\n\nsearchbox.addEventListener('keypress', setQuery);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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