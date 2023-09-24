"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const initialUsers = [
      { username: "user1", createdAt: new Date(), updatedAt: new Date() },
      { username: "user2", createdAt: new Date(), updatedAt: new Date() },
      { username: "user3", createdAt: new Date(), updatedAt: new Date() },
    ];

    await queryInterface.bulkInsert("Users", initialUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
