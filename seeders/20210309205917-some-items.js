"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "cleaning",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Laundry",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "software update",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "playing table tennis",
          deadline: "today",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "folding clothes",
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
