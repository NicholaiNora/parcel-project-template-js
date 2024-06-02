import axios from 'axios';
import Notiflix from 'notiflix';
import {sunRiseTime, sunSetTime } from './date';

const searchInput = document.querySelector('.search-input');
const searchForm = document.querySelector('.search-form');
const location = document.querySelector('.weather-today-location');
const temperature = document.querySelector('.weather-today');
const tempMin = document.querySelector('.temp-min');
const tempMax = document.querySelector('.temp-max');
const weatherIcon = document.querySelector('.weather-today-icon');

async function getWeatherCondition(city) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c32df37628577b1447329bd64ef99bea&units=metric`
    );
    let weatherData = await response.data; // Assigning the fetched data to the module-level variable
    console.log(weatherData);
    updateWeatherDisplay(weatherData);
    updateSunTime(weatherData);
    searchForm.reset();
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure("Can't fetch weather");
  }
}

function updateWeatherDisplay(data) {
  location.innerText = `${data.name}, ${data.sys.country}`;
  temperature.innerText = Math.round(data.main.temp) + '°C';
  tempMin.innerText = Math.round(data.main.temp_min) + '°';
  tempMax.innerText = Math.round(data.main.temp_max) + '°';
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function updateSunTime(data) {
  sunRiseTime(data);
  sunSetTime(data);
  console.log(data.timezone);
}

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    getWeatherCondition(city);
  }
});
