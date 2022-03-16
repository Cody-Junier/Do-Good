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
    
  }
type Query {
    charities: [Charity]
}
`;

module.exports = typeDefs;