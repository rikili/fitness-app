const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Workout {
        id: String!
        theme: String!
        title: String!
        accountID: String!
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
        getWorkouts: [Workout!]!
    }

    #   Mutations

`;

module.exports = { typeDefs };
