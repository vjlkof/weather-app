export default function forecastWeather(forecastedWeather) {
  const forecastedSection = document.querySelector(".forecasted");
  let forecastedDataElement = document.querySelector(".forecasted-data");
  forecastedSection.removeChild(forecastedDataElement);
  forecastedDataElement = document.createElement("div");
  forecastedDataElement.className = "forecasted-data";
  forecastedSection.appendChild(forecastedDataElement);

  forecastedWeather.forecastedArray.forEach((dayItem) => {
    const forecastedItemElement = document.createElement("div");
    const forecastedDayElement = document.createElement("h4");
    const forecastedMaxElement = document.createElement("h3");
    const forecastedMinElement = document.createElement("h6");
    const divForecastedIcon = document.createElement("div");
    const forecastedImgElement = document.createElement("img");

    forecastedItemElement.className = "forecasted-item";
    forecastedDayElement.textContent = dayItem?.dt;
    forecastedMaxElement.textContent = `${dayItem?.temp_max || "-"} °`;
    forecastedMinElement.textContent = `${dayItem?.temp_min || "-"} °`;
    divForecastedIcon.className = "forecasted-icon";
    forecastedImgElement.src = dayItem?.icon;
    forecastedImgElement.alt = dayItem?.condition || "n/a";
    divForecastedIcon.appendChild(forecastedImgElement);
    forecastedItemElement.appendChild(forecastedDayElement);
    forecastedItemElement.appendChild(forecastedMaxElement);
    forecastedItemElement.appendChild(forecastedMinElement);
    forecastedItemElement.appendChild(divForecastedIcon);

    forecastedDataElement.appendChild(forecastedItemElement);
  });
}
