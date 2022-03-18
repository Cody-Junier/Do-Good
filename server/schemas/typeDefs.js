const { gql } = require('apollo-server-express');


// to add to Charity:
// reactionCount: Int
// reactions: [Reaction]
// charityImage: Image
// add in User, eventually mutations 
// removed image from mutation:     addCharity(charityImage: Image!): Charity

const typeDefs = gql`
  type Charity {
    _id: ID
    createdAt: String
    username: String
    charityUrl: String
    charityDescription: String
    charityImg: String
    charityName: String
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
    allCharities: [Charity]
    charities(username: String!): [Charity]
    charity(_id: ID!): Charity
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharity(charityName: String!, charityDescription: String!, charityUrl: String!, charityImg: String!): Charity
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;