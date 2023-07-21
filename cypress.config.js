const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7x5en7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://loginxp.vercel.app"
  }
});
