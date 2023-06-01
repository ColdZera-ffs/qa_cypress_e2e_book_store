const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/login',
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
    },
  },
});
