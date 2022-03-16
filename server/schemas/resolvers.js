const {User, Charity} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/User');

const resolvers = {
    Query: {
      charities: async () => {
        return Charity.find().sort({ createdAt: -1 });
      },
      users: async () => {
        return User.find()
        .select('__v -password')
        .populate('charities');
      },
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
          .select('__v -password')
          .populate('charities');

          return userData;
        }

        throw new AuthenticationError('You must be logged in!');
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User. create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      },
      addCharity: async (parent, image , context) => {
        if (context.user) {
          const charity = await Charity.create({ ...image, username: context.user.username });
      
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { charities: { image, username: context.user.username } } },
            { new: true }
          );
      
          return charity;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
    }
};
  
module.exports = resolvers;