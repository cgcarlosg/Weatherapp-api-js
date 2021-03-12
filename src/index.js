const api = {
  key: 'a012917c99ef51c392b259e302401f8c',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function updateUnits() {

}

function isMetric() {
	return metricRadio.checked
}

function updateUnits() {
	const tempUnits = document.querySelectorAll('[data-temp-unit]')

	tempUnits.forEach(unit => {
		unit.innerText = isMetric() ? 'C' : 'F'
	})
}

const unitToggle = document.querySelector('[data-unit-toggle]')
const metricRadio = document.getElementById('cel')
const imperialRadio = document.getElementById('fah')

unitToggle.addEventListener('click', () => {
  let metricUnits = !isMetric()
  metricRadio.checked = metricUnits
  imperialRadio.checked = !metricUnits
  updateUnits()
})

metricRadio.addEventListener('change', () => {
  updateUnits()
})

imperialRadio.addEventListener('change', () => {
  updateUnits()
})

const searchbox = document.querySelector('.search-box');

const dateBuilder = (d) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'thurs', 'Fri', 'Sat'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

const displayResults = (weather) => {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
}

const getResults = (query) => {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
    .then(weather => weather.json()).then(displayResults);
}

const setQuery = (evt) => {
  if (evt.keyCode === 13) {
    getResults(searchbox.value);
  }
}

searchbox.addEventListener('keypress', setQuery)