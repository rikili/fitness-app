import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginDrainHttpServer,
} from 'apollo-server-core';
import http from 'http';

// graphQL
import typeDefs from './graphQL/typeDefs';

//  routes
import weatherAPI from './routes/weatherAPI';

// mongoDB
import workoutModel from './models/Workout';

require('dotenv/config');

const app: express.Application = express();
const key: string = process.env.DB_CONNECT!;

//  middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/weather', weatherAPI);

//  db connection
mongoose.connect(key, { dbName: 'FitnessApp' }, async () => {
  // eslint-disable-next-line no-console
  console.log('connect to db');
});

const resolvers = {
  Query: {
    getWorkouts: async (parent: any, args: { accountId: string }) => {
      const workoutQuery = await workoutModel.aggregate([{
        $match: { accountId: new mongoose.Types.ObjectId(args.accountId) },
      }]).exec();
      return workoutQuery;
    },
  },
};

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  introspection: process.env.NODE_ENV === 'development',
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});
server.start()
  .then(() => {
    server.applyMiddleware({ app });
  })
  .then(() => new Promise<void>((resolve, reject) => {
    httpServer.listen({ port: 4000 }, resolve);
    setTimeout(reject, 10000);
  }))
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('connection to GraphQL Server rejected after 10s');
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(`GraphQL Server ready at http://localhost:4000${server.graphqlPath}`);
  });

app.listen(5005, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on 5005');
});
