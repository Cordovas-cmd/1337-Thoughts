// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals


// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
// GraphQL has built-in data types known
//  as scalars. Scalars work similarly to how 
//  we defined data in Mongoose using JavaScript's 
//  built-in types

const typeDefs = gql`
type Thought {
    # ID is essentially the same as String except that it is looking for a unique identifier
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Query {
    # instructing our query that we'll return an array
    thoughts(username: String): [Thought]
  }
`;

// export the typeDefs
module.exports = typeDefs;