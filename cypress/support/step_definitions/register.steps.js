const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
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