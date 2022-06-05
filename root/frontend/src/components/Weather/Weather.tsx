import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useStyles from './Weather.style';

function Weather() {
  const classes = useStyles();
  const fetchWeatherData = async (): Promise<any> => {
    const data = await axios('http://localhost:5005/weather/getWeatherInfo');
    return data.data;
  };

  type WeatherDataObj = {
    current: any;
    location: any;
  };

  const [weatherData, setWeatherData] = useState<WeatherDataObj>();

  useEffect(() => {
    const getWeather = async () => {
      const fetchedWeatherData = await fetchWeatherData();
      setWeatherData(fetchedWeatherData);
    };
    getWeather();
  }, []);

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
