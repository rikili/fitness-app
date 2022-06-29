import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
//  routes
import weatherAPI from './routes/weatherAPI';

require('dotenv/config');

const app: express.Application = express();
const key: string = process.env.WEATHER_API_KEY!;

//  middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/weather', weatherAPI);

//  db connection
mongoose.connect(key, () => {
  // eslint-disable-next-line no-console
  console.log('connect to db');
});

app.listen(5005, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on 5005');
});
