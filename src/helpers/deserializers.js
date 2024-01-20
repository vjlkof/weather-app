export function deserializeWeatherDayInfo(weatherData) {
  weatherData = {
    coord: {
      lon: -0.13,
      lat: 51.51,
    },
    weather: [
      {
        id: 300,
        main: "Drizzle",
        description: "light intensity drizzle",
        icon: "09d",
      },
    ],
    base: "stations",
    main: {
      temp: 280.32,
      pressure: 1012,
      humidity: 81,
      temp_min: 279.15,
      temp_max: 281.15,
    },
    visibility: 10000,
    wind: {
      speed: 4.1,
      deg: 80,
    },
    clouds: {
      all: 90,
    },
    dt: 1485789600,
    sys: {
      type: 1,
      id: 5091,
      message: 0.0103,
      country: "GB",
      sunrise: 1485762037,
      sunset: 1485794875,
    },
    id: 2643743,
    name: "London",
    cod: 200,
  };
  const { name, coord, dt, weather, main, visibility, wind } = weatherData;
  const { main: condition, description, icon } = weather[0];
  const { temp, feels_like, humidity, pressure, temp_min, temp_max } = main;
  return {
    weatherDay: {
      name,
      coord,
      dt,
      condition,
      description,
      icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      temp,
      feels_like,
      humidity,
      pressure,
      temp_min,
      temp_max,
      visibility,
      wind,
    },
  };
}

export function deserializeWeatherForecastInfo(weatherForecastData) {
  weatherForecastData = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1647345600,
        main: {
          temp: 284.83,
          feels_like: 283.59,
          temp_min: 284.83,
          temp_max: 285.69,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 964,
          humidity: 59,
          temp_kf: -0.86,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.7,
          deg: 288,
          gust: 2.1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-03-15 12:00:00",
      },
      {
        dt: 1647356400,
        main: {
          temp: 285.09,
          feels_like: 283.85,
          temp_min: 285.09,
          temp_max: 285.6,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 961,
          humidity: 58,
          temp_kf: -0.51,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.24,
          deg: 26,
          gust: 2.56,
        },
        visibility: 10000,
        pop: 0.26,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-03-15 15:00:00",
      },
      {
        dt: 1647367200,
        main: {
          temp: 283.03,
          feels_like: 281.89,
          temp_min: 282.13,
          temp_max: 283.03,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 961,
          humidity: 71,
          temp_kf: 0.9,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.41,
          deg: 169,
          gust: 4.81,
        },
        visibility: 10000,
        pop: 0.31,
        sys: {
          pod: "n",
        },
        dt_txt: "2022-03-15 18:00:00",
      },
      {
        dt: 1647766800,
        main: {
          temp: 278.26,
          feels_like: 274.33,
          temp_min: 278.26,
          temp_max: 278.26,
          pressure: 1030,
          sea_level: 1030,
          grnd_level: 966,
          humidity: 54,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 18,
        },
        wind: {
          speed: 5.66,
          deg: 89,
          gust: 8.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2022-03-20 09:00:00",
      },
    ],
    city: {
      id: 2867714,
      name: "Munich",
      coord: {
        lat: 48.1374,
        lon: 11.5755,
      },
      country: "DE",
      population: 1260391,
      timezone: 3600,
      sunrise: 1647322046,
      sunset: 1647364681,
    },
  };
  const { city, list } = weatherForecastData;
  const { name } = city;
  const forecastedArray = list.map((forecastedItem) => {
    return {
      dt: forecastedItem.dt,
      dt_txt: forecastedItem.dt_txt,
      icon: `https://openweathermap.org/img/wn/${forecastedItem.weather[0].icon}@2x.png`,
      temp_min: forecastedItem.main.temp_min,
      temp_max: forecastedItem.main.temp_max,
    };
  });
  return {
    weatherforecasted: {
      name,
      forecastedArray,
    },
  };
}
