const {User, Charity} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      allCharities: async () => {
        return Charity.find().sort({ createdAt: -1 });
      },
      charity: async (parent, args, context) => {
        return Charity.findOne({_id: args._id })
      },
      users: async () => {
        return User.find()
        .populate('charities')
        .select('__v -password')
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
        const user = await User.create(args);
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
    //   Have to remove image for now, must learn how to implement it later
      addCharity: async (parent , args, context) => {
        if (context.user) {
            // removed ...image in create
          const charity = await Charity.create(args);
      
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            // removed image before username:
            { $push: { charities: charity.id } },
            { new: true }
          );
      
          return charity;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
    }
};
  
module.exports = resolvers;