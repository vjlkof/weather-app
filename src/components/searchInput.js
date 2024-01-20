import {
  fetchWeatherDayInfo,
  fetchWeatherForecastInfo,
} from "../helpers/apiCalls";

export default function searchInput() {
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("search-button");
  let searchValue = "";

  console.log(searchInput);
  searchInput.addEventListener("input", () => {
    searchValue = searchInput.value;
    console.log(searchValue);
  });

  searchButton.addEventListener("click", async () => {
    const switchValue = document.getElementById("toggle").checked;
    const weatherDayInfo = await fetchWeatherDayInfo(searchValue, switchValue);
    const weatherForecastInfo = await fetchWeatherForecastInfo(
      searchValue,
      switchValue
    );

    console.log(weatherDayInfo);
    console.log("info-forcast", weatherForecastInfo);
  });
}
