import axios from 'axios';
const dateDay = document.querySelector('.date-day-span');
const dateMonth = document.querySelector('.month-span');
const dateTime = document.querySelector('.time-span');
const sunRise = document.querySelector('.date-sun-rise-span');
const sunSet = document.querySelector('.date-sun-set-span');

const date = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
console.log(date);

function getOrdinalSuffix(day) {
  if (day > 3 && day < 21) return 'th'; // Covers 11th, 12th, 13th, etc.
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}
// function getDayWithOrdinal(date) {
//   const day = date.getDate();
//   const suffix = getOrdinalSuffix(day);
//   return `${day}${suffix}`;
// }
console.log(date.getDate());
console.log(getOrdinalSuffix(date.getDate()));

function getWeekName(week) {
  return weekdays[week.getDay()];
}
console.log(getWeekName(date));

dateDay.innerHTML = `${date.getDate()}<sup>${getOrdinalSuffix(
  date.getDate()
)}</sup> ${getWeekName(date)}`;

function getMonthName(month) {
  return months[month.getMonth()];
}
console.log(getMonthName(date));

dateMonth.innerHTML = `${getMonthName(date)}`;

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds(); // Start time in seconds

let totalSeconds = hours * 3600 + minutes * 60 + seconds;

setInterval(() => {
  ++totalSeconds;
  hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, '0');
  minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  seconds = (totalSeconds % 60).toString().padStart(2, '0');
  dateTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

function sunRiseTime(weatherData) {
  const sunriseTime = new Date(weatherData.sys.sunrise * 1000);

  return (sunRise.innerHTML = `${sunriseTime
    .getHours()
    .toString()
    .padStart(2, '0')}:${sunriseTime
    .getMinutes()
    .toString()
    .padStart(2, '0')}`);
}

function sunSetTime(weatherData) {
  const sunriseTime = new Date(weatherData.sys.sunset * 1000);

  return (sunSet.innerHTML = `${sunriseTime
    .getHours()
    .toString()
    .padStart(2, '0')}:${sunriseTime
    .getMinutes()
    .toString()
    .padStart(2, '0')}`);
}

const quotes = document.querySelector('.quotes-container');

async function fetchRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    quotesData = await response.data;
    console.log(quotesData);
      quotes.innerHTML = `<p class="quotes-paragraph">${quotesData.content}</p>
      <span class="quotes-person">${quotesData.author}</span>`;
  } catch (e) {
    console.log(e);
  }
}

fetchRandomQuote()


export { sunRiseTime, sunSetTime };
