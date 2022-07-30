import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { graphqlHTTP } from 'express-graphql';
//  routes
import weatherAPI from './routes/weatherAPI';

require('dotenv/config');
const schema = require('./schema/schema');

const app: express.Application = express();
const key: string = process.env.DB_CONNECT!;

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

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(5005, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on 5005');
});
