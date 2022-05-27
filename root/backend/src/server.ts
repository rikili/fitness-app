import express from 'express';
import cors from 'cors';

//  routes
import weatherAPI from './routes/weatherAPI';

const app: express.Application = express();

//  middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/weather', weatherAPI);

app.listen(5005, () => {
// eslint-disable-next-line no-console
  console.log('server listening on 5005');
});
