const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cypress.vivifyscrum-stage.com/",
    addBoard:
      "https://cypress.vivifyscrum-stage.com/organizations/27009/boards",
  },

  env: {
    validEmail: "vlada.zelenovic@gmail.com",
    validPassword: "Vukan123",
    boardTitle: "Vukanic",
  },
});
