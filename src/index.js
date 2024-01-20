import "./style.css";
import {
  fetchWeatherDayInfo,
  fetchWeatherForecastInfo,
} from "./helpers/apiCalls";
import {
  deserializeWeatherDayInfo,
  deserializeWeatherForecastInfo,
} from "./helpers/deserializers";
import searchInput from "./components/searchInput";
import switchButton from "./components/switchButton";

(async function () {
  switchButton();
  searchInput();
  const weatherDayInfo = await fetchWeatherDayInfo();
  console.log(weatherDayInfo);
  const weatherForecastInfo = await fetchWeatherForecastInfo();
  console.log(weatherForecastInfo);
  const deserializedDayData = deserializeWeatherDayInfo(weatherDayInfo);
  const deserializedForecastData =
    deserializeWeatherForecastInfo(weatherForecastInfo);
  console.log("info:", deserializedDayData);
  console.log("info-forecasted:", deserializedForecastData);
})();
