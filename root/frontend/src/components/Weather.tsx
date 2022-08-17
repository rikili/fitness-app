import React, { useEffect, useState } from 'react';
import axios from 'axios';
import host from '../constant';
import '../styles/Weather.scss';

function Weather() {
  type WeatherDataObj = {
    current: any;
    location: any;
  };

  const [weatherData, setWeatherData] = useState<WeatherDataObj>();

  useEffect(() => {
    let controller: any = new AbortController();
    const getWeather = async () => {
      try {
        const fetchedWeatherData: any = await axios(`${host}/weather/getWeatherInfo`, {
          signal: controller.signal,
        });
        setWeatherData(fetchedWeatherData.data);
        controller = null;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };
    getWeather();
    return () => controller?.abort();
  }, [setWeatherData]);

  return (
    <div className="weatherContainer">
      <div className="currInfo">
        <div className="currWeatherTemp">
          <h5 className="temp">{weatherData?.current.temp_c}</h5>
          <h5 className="temp">&deg;C</h5>
        </div>
        <p className="location">{weatherData?.location.name}</p>
      </div>
      <img src={weatherData?.current.condition.icon} alt="weather-icon" className="currWeather" />
    </div>
  );
}

export default Weather;
