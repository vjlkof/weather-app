export default function currentWeather(weatherDayInfo) {
  const conditionElement = document.getElementById("condition");
  const nameElement = document.getElementById("name");
  const datetimeElement = document.getElementById("datetime");
  const currentTempElement = document.getElementById("current-temp");
  const descriptionElement = document.getElementById("description");
  const imgElement = document.getElementById("icon-img");
  const minMaxElement = document.getElementById("min-max");
  const feelsLikeElement = document.getElementById("feels-like");
  const HumidityElement = document.getElementById("humidity");
  const pressureElement = document.getElementById("pressure");
  const visibilityElement = document.getElementById("visibility");
  const windSpeedElement = document.getElementById("wind-speed");

  conditionElement.textContent = weatherDayInfo.condition;
  nameElement.textContent = weatherDayInfo.name;
  datetimeElement.textContent = weatherDayInfo.dt;
  currentTempElement.textContent = `${weatherDayInfo.temp || "-"} ° `;
  descriptionElement.textContent = weatherDayInfo.description;
  imgElement.src = weatherDayInfo.icon;
  minMaxElement.textContent = `Min ${weatherDayInfo.temp_min || "-"} ° - Max ${
    weatherDayInfo.temp_max || "-"
  } °`;
  feelsLikeElement.textContent = `${weatherDayInfo.feels_like || "-"} °`;
  HumidityElement.textContent = `${weatherDayInfo.humidity || "-"} %`;
  pressureElement.textContent = `${weatherDayInfo.pressure || "-"} hp`;
  visibilityElement.textContent = `${Math.round(
    weatherDayInfo.visibility / 1000
  )} km `;
  windSpeedElement.textContent = `${weatherDayInfo.wind.speed || "-"} km/h`;
}
