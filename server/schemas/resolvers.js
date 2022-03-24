const {User, Charity} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      charities: async () => {
        console.log('charities')
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
        console.log('login')
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
      addCharity: async (parent , args, context) => {
        console.log("add charity")
        console.log(context)
        if (context.user) {
          const charity = await Charity.create({ ...args, username: context.user.username});
      
          await User.findByIdAndUpdate(
            { _id: context.user._id },
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