"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Personal list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Office list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: "Sport list",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoLists", null, {});
  },
};
