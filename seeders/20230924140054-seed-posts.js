"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const initialPosts = [
      {
        userId: 1,
        content: "Post 1 content",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        content: "Post 2 content",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        content: "Post 3 content",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Posts", initialPosts, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
