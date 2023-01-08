const { When } = require("@badeball/cypress-cucumber-preprocessor");

When("I visit demoblaze webpage", () => {
  cy.visit("https://www.demoblaze.com/");
});