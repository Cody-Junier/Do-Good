const {User, Charity} = require('../models')
// Put User in here
const resolvers = {
    Query: {
      charities: async () => {
        return Charity.find().sort({ createdAt: -1 });
      }
    }
  };
  
module.exports = resolvers;