export async function fetchWeatherDayInfo(place, unit) {
  // const key = "10a2265d56a248ec98a154831241801";
  const appid = "711c9633cb8ba6f4798e0bcf3f7e25b4";
  const defaultPlace = "Buenos Aires";
  const defaultUnit = unit ? "imperial" : "metric";

  console.log(
    "url",
    `https://api.openweathermap.org/data/2.5/weather?q=${
      place || defaultPlace
    }&appid=${appid}&units=${defaultUnit}`
  );
  // `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultPlace}`
  // const weatherDayInfo = await fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${
  //     place || defaultPlace
  //   }&appid=${appid}&units=${defaultUnit}`
  // );
  // return await weatherDayInfo.json();
}

export async function fetchWeatherForecastInfo(place, unit) {
  // const key = "10a2265d56a248ec98a154831241801";
  const appid = "711c9633cb8ba6f4798e0bcf3f7e25b4";
  const defaultPlace = "Buenos Aires";
  const defaultUnit = unit ? "imperial" : "metric";

  console.log(
    "url",
    `https://api.openweathermap.org/data/2.5/forecast?q=${
      place || defaultPlace
    }&appid=${appid}&units=${defaultUnit}`
  );
  // `http://api.weatherapi.com/v1/current.json?key=${key}&q=${defaultPlace}`
  // const weatherDayInfo = await fetch(
  //   `https://api.openweathermap.org/data/2.5/forecast?q=${
  //     place || defaultPlace
  //   }&appid=${appid}&units=${defaultUnit}`
  // );
  // return await weatherDayInfo.json();
}
