const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/do-good',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  }
);

module.exports = mongoose.connection;