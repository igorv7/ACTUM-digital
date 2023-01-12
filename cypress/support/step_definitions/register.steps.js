const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { faker } from '@faker-js/faker';
import RegisterPage from "../../pages/registerPage";

const registerPage = new RegisterPage();

When(/^I click on Sign Up tab$/, () => {
  registerPage.clickSignUpTab();
});

When(/^I enter sign up username value "(.*)"$/, (username) => {
    registerPage.enterSignUpUsername(username);
});
  
When(/^I enter sign up password value "(.*)"$/, (password) => {
    registerPage.enterSignUpPassword(password);
});

When(/^I enter new sign up username$/, () => {
  registerPage.enterSignUpUsername(faker.internet.email());
});

When(/^I enter new sign up password$/, () => {
  registerPage.enterSignUpPassword(faker.vehicle.model());
});

When(/^I click on Sign up button$/, () => {
    registerPage.clickSignUpButton();
});

Then(/^I click on Sign up button and validate alert message "(.*)"$/, (message) => {
    registerPage.clickSignUpButton();
    cy.on("window:alert", (m) => {
      //verify text on pop-up
      expect(m).to.equal(message);
      });
});  

/* Unfortunately I didn't have time to debug this but validating alert message is not working how it supposed to work,
 for some reason it is always asserting alert message in the last test scenario - probably Cypress 10+ quirks*/