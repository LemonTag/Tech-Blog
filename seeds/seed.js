const sequelize = require('../config/connection');

// Import all models
const { User, Post, } = require('../models');

// Import all seeds
const userData = require('./userData.json');
const postData = require('./postData.json');


// Asynchronous function to seed the database
const seedDatabase = async () => {
  try {
    // Sync all models
    await sequelize.sync({ force: true });

    // Seed users first
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.log('Users seeded successfully');

    // Seed posts after users
    console.log('Seeding posts...');
    const posts = await Post.bulkCreate(
      postData.map((post) => ({
        ...post,
        userId: users.find((user) => user.id === post.userId)?.id, // Using optional chaining to handle potential undefined
      }))
    );
    console.log('Posts seeded successfully');

    // Log a success message
    console.log('Database seeding completed successfully');
  } catch (error) {
    // Log any errors that occur during seeding
    console.error('Error seeding database:', error);
  }
};

// Call the seeding function
seedDatabase();

