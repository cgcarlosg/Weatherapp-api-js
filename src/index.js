const api = {
  key: 'a012917c99ef51c392b259e302401f8c',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const unitToggle = document.querySelector('[data-unit-toggle]');
const metricRadio = document.getElementById('cel');
const imperialRadio = document.getElementById('fah');
const searchbox = document.querySelector('.search-box');

const isMetric = () => metricRadio.checked;

const updateUnits = () => {
  const tempUnits = document.querySelectorAll('[data-temp-unit]');

  tempUnits.forEach(unit => {
    unit.innerText = isMetric() ? '°C' : '°F';
  });
};

const dateBuilder = (d) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'thurs', 'Fri', 'Sat'];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

searchbox.addEventListener('keypress', setQuery);

const displayWeather = (weather) => {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const now = new Date();
  const date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}`;

  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = weather.weather[0].main;

  const hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)} / ${Math.round(weather.main.temp_max)}`;

  unitToggle.addEventListener('click', () => {
    const degrees = isMetric() ? ((weather.main.temp - 32) * (5 / 9)) : weather.main.temp;
    const degreMin = isMetric() ? ((weather.main.temp_min - 32) * (5 / 9)) : weather.main.temp_min;
    const degreMax = isMetric() ? ((weather.main.temp_max - 32) * (5 / 9)) : weather.main.temp_max;
    hilow.innerText = `${Math.round(degreMin)} / ${Math.round(degreMax)}`;
    const metricUnits = !isMetric();
    metricRadio.checked = metricUnits;
    imperialRadio.checked = !metricUnits;
    temp.innerHTML = `${Math.round(degrees)}`;
    updateUnits();
  });
  updateUnits();
};
async function getResults(query) {
  try {
    const response = await fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`,
      { mode: 'cors' });
    const weather = await response.json();
    displayWeather(weather);
  } catch (err) {
    alert(err);
  }
}
// eslint-disable-next-line no-use-before-define
const setQuery = (evt) => {
  if (evt.keyCode === 13) {
    getResults(searchbox.value);
  }
};
