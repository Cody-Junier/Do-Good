const faker = require('faker');

const db = require('../config/connection');
const { Charity, User } = require('../models');

db.once('open', async () => {
  await Charity.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create Charities
  let createdCharities = [];
  for (let i = 0; i < 10; i += 1) {
    const charityDescription = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const charityName = "Charity" + " " +[i]
    const charityUrl = 'https://www.redcross.org/'
    const charityImg = "https://res.cloudinary.com/dwgja4bfo/image/upload/v1647713478/t7qqcwme1euzbfv6w7ge.jpg"
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdCharity = await Charity.create({ charityDescription, username, charityName, charityUrl, charityImg });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { charities: createdCharity._id } }
    );

    createdCharities.push(createdCharity);
  }

  console.log('all done');
  process.exit(0);
});