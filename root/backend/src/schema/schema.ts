const {
  GraphQLSchema,
  GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLInt,
} = require('graphql');

const Account = require('../models/Account');
const Workout = require('../models/Workout')

const DetailType = new GraphQLObjectType({
  name: 'Detail',
  fields: () => ({
    sets: { type: GraphQLInt },
    reps: { type: GraphQLInt },
  }),
});

const ExerciseType = new GraphQLObjectType({
  name: 'Exercise',
  fields: () => ({
    name: { type: GraphQLString },
    details: { type: DetailType },
  }),
});

const WorkoutType = new GraphQLObjectType({
  name: 'Workout',
  fields: () => ({
    id: { type: GraphQLID },
    theme: { type: GraphQLString },
    title: { type: GraphQLString },
    accountID: { type: GraphQLString },
    exercises: { type: new GraphQLList(ExerciseType) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    workouts: {
      type: new GraphQLList(WorkoutType),
      resolve(parent, args) {
        Account.find()
      },
    },
    workout: {
      type: WorkoutType,
      args: { id: { type: GraphQLID } },
      resolve(parent args) {
        return workouts.find((workout) => workout.id === args.id)
      }
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
