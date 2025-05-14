const urlBase = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "b1187a782c5aa14e206e89c679c22859";

const diffKevin = 273.15;

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  console.log(city);

  if (city) {
    fetchWeather(city);
  } else {
    alert("ingrese una ciudad válida");
  }
});

function fetchWeather(city) {
  fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
    .then((data) => data.json())
    .then((data) => showWeatherData(data));
}

function showWeatherData(data) {
  const divResponseData = document.getElementById("responseData");
  divResponseData.innerHTML = "";

  const cityName = data.name;
  const countryName = data.sys.country;
  const temp = data.main.temp;
  const humidity = data.main.humidity;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const cityInfo = document.createElement("h2");
  cityInfo.textContent = `${cityName}, ${countryName}`;
  const tempInfo = document.createElement("p");
  tempInfo.textContent = `Temperture is: ${Math.floor(temp - diffKevin)}ºC`;
  const humidityInfo = document.createElement("p");
  humidityInfo.textContent = `Humidity is: ${humidity}%`;
  const icoInfo = document.createElement("img");
  icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const descriptionInfo = document.createElement("p");
  descriptionInfo.textContent = `Metereologic description is: ${description}`;

  divResponseData.appendChild(cityInfo);
  divResponseData.appendChild(tempInfo);
  divResponseData.appendChild(humidityInfo);
  divResponseData.appendChild(icoInfo);
  divResponseData.appendChild(descriptionInfo);
}
