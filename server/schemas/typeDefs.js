const { gql } = require('apollo-server-express');


// to add to Charity:
// reactionCount: Int
// reactions: [Reaction]

const typeDefs = gql`
  type Charity {
    _id: ID
    charityImage: Image
    createdAt: String
    username: String
    description: String
  }
  type User {
    _id: ID
    username: String
    email: String
    charities: [Charity]
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    charities(username: String!): [Charity]
    charity(_id: ID!): Charity
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharity(charityImage: Image!): Charity
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;