import express from 'express';
import axios from 'axios';

require('dotenv').config();

const router: express.Router = express.Router();

router.get('/getWeatherInfo', async (req, res) => {
  const key: string = process.env.WEATHER_API_KEY!;
  const url: string = `https://api.weatherapi.com/v1/current.json?key=${key}&q=Vancouver`;
  try {
    const weatherInfo = await axios.get(url);
    res.send(weatherInfo.data);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
