const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { contains } from "cypress/types/jquery";
import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage();

When(/^I click on Log In tab$/, () => {
  loginPage.clickLoginTab();
});

When(/^I enter log in username value "(.*)"$/, (username) => {
  loginPage.enterLoginUsername(username);
});

When(/^I enter log in password value "(.*)"$/, (password) => {
  loginPage.enterLoginPassword(password);
});

When(/^I click on Log in button$/, () => {
  loginPage.clickLoginButton();
});

Then(/^I validate the correct user is logged in with "(.*)" message$/, (message) => {
  loginPage.getLoggedUser().should('contain.text', message);
});

Then(/^I click on Log in button and validate alert message "(.*)"$/, (message) => {
  loginPage.clickLoginButton();
  cy.on("window:alert", (m) => {
    //verify text on pop-up
    expect(m).to.equal(message);
    });
});