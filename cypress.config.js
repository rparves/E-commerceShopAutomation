const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  video: true,
  screenshotsFolder: 'images',
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
    },
  },
});
