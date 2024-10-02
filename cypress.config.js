const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    watchForFileChanges: false,
    pageLoadTimeout: 120000, 
    video: true,
    videoCompression: 32, 
    videosFolder: 'cypress/videos', 

    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/reports/mochawesome-report"
     },

     retries: {
      runMode: 2,    // number of retries when running in CLI mode
      openMode: 1    // number of retries when running in Cypress GUI
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
