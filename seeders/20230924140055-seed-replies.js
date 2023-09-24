"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const initialReplies = [
      {
        postId: 1,
        userId: 2,
        content: "Reply to post 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 2,
        userId: 1,
        content: "Reply to post 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        postId: 3,
        userId: 3,
        content: "Reply to post 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Replies", initialReplies, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Replies", null, {});
  },
};
