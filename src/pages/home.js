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
import {
  showErrorMessage,
  removeErrorMessage,
} from "../helpers/showErrorMessage";

export default async function home(place, unit) {
  try {
    loading();
    removeErrorMessage();
    const weatherDayInfo = await fetchWeatherDayInfo(place, unit);
    const weatherForecastInfo = await fetchWeatherForecastInfo(place, unit);
    const deserializedDayData = deserializeWeatherDayInfo(weatherDayInfo);
    const deserializedForecastData =
      deserializeWeatherForecastInfo(weatherForecastInfo);
    currentWeather(deserializedDayData);
    forecastWeather(deserializedForecastData);
  } catch (error) {
    showErrorMessage("Please introduce a valid place and check again!");
  } finally {
    removeLoading();
  }
}
