import {
  fetchWeatherDayInfo,
  fetchWeatherForecastInfo,
} from "../helpers/apiCalls";
import {
  deserializeWeatherDayInfo,
  deserializeWeatherForecastInfo,
} from "../helpers/deserializers";
import currentWeather from "../components/currentWeather";
import forecastWeather from "../components/forecastWeather";
import { loading, removeLoading } from "../components/loading";

export default async function home(place, unit) {
  loading();
  const weatherDayInfo = await fetchWeatherDayInfo(place, unit);
  const weatherForecastInfo = await fetchWeatherForecastInfo(place, unit);
  const deserializedDayData = deserializeWeatherDayInfo(weatherDayInfo);
  const deserializedForecastData =
    deserializeWeatherForecastInfo(weatherForecastInfo);
  currentWeather(deserializedDayData);
  forecastWeather(deserializedForecastData);
  removeLoading();
}
