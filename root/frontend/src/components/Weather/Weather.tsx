import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from './Weather.style';

function Weather() {
  const classes = useStyles();

  type WeatherDataObj = {
    current: any;
    location: any;
  };

  const [weatherData, setWeatherData] = useState<WeatherDataObj>();

  useEffect(() => {
    let controller: any = new AbortController();
    const getWeather = async () => {
      try {
        const fetchedWeatherData: any = await axios('http://localhost:5005/weather/getWeatherInfo', {
          signal: controller.signal,
        });
        setWeatherData(fetchedWeatherData.data);
        controller = null;
      } catch (err) {
        console.log(err);
      }
    };
    getWeather();
    return () => controller?.abort();
  }, [setWeatherData]);

  return (
    <div className={classes.weatherContainer}>
      <div className={classes.leftBorder} />
      <img src={weatherData?.current.condition.icon} alt="weather-icon" className={classes.currWeather} />
      <div className={classes.currWeatherTemp}>
        <p>{weatherData?.current.temp_c}</p>
        <p>&deg;C</p>
      </div>
    </div>
  );
}

export default Weather;
