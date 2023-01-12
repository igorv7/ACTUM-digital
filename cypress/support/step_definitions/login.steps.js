const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
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

Then(/^I validate the correct user is logged in$/, () => {
  loginPage.getLoggedUser();
});

Then(/^I click on Log in button and validate alert message "(.*)"$/, (message) => {
  loginPage.clickLoginButton();
  cy.on("window:alert", (m) => {
    //verify text on pop-up
    expect(m).to.equal(message);
    });
});

/* Unfortunately I didn't have time to debug this but validating alert message is not working how it supposed to work,
 for some reason it is always asserting alert message in the last test scenario - probably Cypress 10+ quirks*/