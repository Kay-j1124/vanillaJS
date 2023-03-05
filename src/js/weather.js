const geoContainer = document.querySelector("#geo");
const onGeoOk = (position) => {
  const API_KEY = "0da5e278a419f1569ae0d1621c37ac10";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url).then(response => response.json()).then(data => {
    const city = document.querySelector("#city");
    const weather = document.querySelector("#weather");
    const icon = document.querySelector("#weatherIcon");
    const temperature = document.querySelector("#temperature");
    const getWeather = data.weather[0].main;
    const getWeatherIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const getCity = data.name;
    const getTemp = Math.ceil(data.main.temp - 273.15);

    city.innerText = getCity;
    weather.innerText = getWeather;
    icon.innerHTML = `<img src="${getWeatherIcon}" alt="weather icon">`;
    temperature.innerText = `${getTemp}℃`;
  });
}

const onGeoError = () => {
  alert("Oops! Can't find your location. 🥲 No weather for you.");
  geoContainer.classList.add("is-hidden");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);