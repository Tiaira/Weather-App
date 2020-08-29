function submitCity(event) {
  event.preventDefault();
  let searching = document.querySelector("#search-input");
  let h2 = document.querySelector("h2");

  if (searching.value) {
    h2.innerHTML = `Currently in ${searching.value}`;
    showTemp(searching.value);
  } else {
    h2.innerHTML = null;
    alert("Please enter a city");
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitCity);

let currentDayTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDayTime.getDay()];
let hours = currentDayTime.getHours();
let minutes = currentDayTime.getMinutes();
let h4 = document.querySelector("h4");

h4.innerHTML = `${day} ${hours}:${minutes}`;

//showTemperature, replace city name, extra(current button)
function showTemperature(response) {
  console.log(response.data);
  let iconElement = document.querySelector("#icon");

  console.log(response.data.main.temp);
  let temp = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temp}°F`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/10d@2x.png`
  );
}
function showTemp(city) {
  let units = "imperial";
  let apiKey = "6554fd34d0e6f9c06e401d48f72e3d1c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
}

navigator.geolocation.getCurrentPosition(showPosition);
