function submitCity(event) {
  event.preventDefault();
  let searching = document.querySelector("#search-input");
  let h3 = document.querySelector("h3");

  if (searching.value) {
    h3.innerHTML = `Uploading information for ${searching.value}`;
    showTemp(searching.value);
  } else {
    h3.innerHTML = null;
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

h4.innerHTML = `Today is ${day} ${hours}:${minutes}`;

//showTemperature, replace city name, extra(current button)
function showTemperature(response) {
  console.log(response.data.main.temp);
  let temp = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temp}°F`;
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
