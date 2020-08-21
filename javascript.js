let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here
let city = prompt("Enter a city");
if (city === ["paris", "tokyo", "lisbon", "san francisco", "moscow"]) {
  alert(`It is currently ${temp} in ${city} with a humidity of 80%`);
} else {
  alert(
    `Sorry, we know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
