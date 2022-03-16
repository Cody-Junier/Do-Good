const { gql } = require('apollo-server-express');


// to add to Charity:
// reactionCount: Int
// reactions: [Reaction]
// charityImage: Image
// add in User, eventually mutations 
const typeDefs = gql`
type Charity {
    _id: ID
    createdAt: String
    username: String
    
  }
type Query {
    charities: [Charity]
}
`;

module.exports = typeDefs;