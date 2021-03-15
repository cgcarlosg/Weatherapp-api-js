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

eval("const api = {\n  key: 'a012917c99ef51c392b259e302401f8c',\n  base: 'https://api.openweathermap.org/data/2.5/',\n};\n\nconst isMetric = () => {\n\treturn metricRadio.checked\n}\n\nconst updateUnits = () => {\n\tconst tempUnits = document.querySelectorAll('[data-temp-unit]')\n\n\ttempUnits.forEach(unit => {\n\t\tunit.innerText = isMetric() ? '°C' : '°F'\n\t})\n}\n\nconst unitToggle = document.querySelector('[data-unit-toggle]')\nconst metricRadio = document.getElementById('cel')\nconst imperialRadio = document.getElementById('fah')\n\nconst searchbox = document.querySelector('.search-box');\n\nconst dateBuilder = (d) => {\n  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'thurs', 'Fri', 'Sat'];\n\n  const day = days[d.getDay()];\n  const date = d.getDate();\n  const month = months[d.getMonth()];\n  const year = d.getFullYear();\n\n  return `${day} ${date} ${month} ${year}`;\n}\n\nasync function getResults(query) {\ntry {\nconst response = await fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`,\n{ mode: 'cors' });\nconst weather = await response.json();\ndisplayWeather(weather);\n} catch (err) {\n    alert(err);\n}\n}\n\nconst setQuery = (evt) => {\n  if (evt.keyCode === 13) {\n    getResults(searchbox.value);\n  }\n}\n\nsearchbox.addEventListener('keypress', setQuery)\n\n\nconst displayWeather = (weather) => {\n\n  const city = document.querySelector('.location .city');\n  city.innerText = `${weather.name}, ${weather.sys.country}`;\n\n  const now = new Date();\n  const date = document.querySelector('.location .date');\n  date.innerText = dateBuilder(now);\n\n  const temp = document.querySelector('.current .temp');\n  temp.innerHTML = `${Math.round(weather.main.temp)}`;\n\n  const weatherEl = document.querySelector('.current .weather');\n  weatherEl.innerText = weather.weather[0].main;\n\n  const hilow = document.querySelector('.hi-low');\n  hilow.innerText = `${Math.round(weather.main.temp_min)} / ${Math.round(weather.main.temp_max)}`;\n\n  unitToggle.addEventListener('click', () => {\n    const degrees = isMetric() ? ((weather.main.temp-32)*5/9) : weather.main.temp;\n    const degreesMin = isMetric() ? ((weather.main.temp_min-32)*5/9) : weather.main.temp_min;\n    const degreesMax = isMetric() ? ((weather.main.temp_max-32)*5/9) : weather.main.temp_max;\n    hilow.innerText = `${Math.round(degreesMin)} / ${Math.round(degreesMax)}`;\n    let metricUnits = !isMetric()\n    metricRadio.checked = metricUnits\n    imperialRadio.checked = !metricUnits\n    temp.innerHTML = `${Math.round(degrees)}`;\n    updateUnits()\n  })\n  updateUnits()\n}\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

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