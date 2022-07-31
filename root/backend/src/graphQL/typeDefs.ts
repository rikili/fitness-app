import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Workout {
        id: String!
        theme: String!
        title: String!
        accountId: String!
        exercises: [Exercise!]!
    }

    type Exercise {
        name: String!
        details: Detail!
    }

    type Detail {
        sets: Int!
        reps: Int!
    }

    #   Queries
    type Query {
        getWorkouts(accountId: String!): [Workout!]!
    }

    #   Mutations // TODO

`;

export default typeDefs;
