const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import ShoppingCartPage from "../../pages/shoppingCartPage";

const shoppingCartPage = new ShoppingCartPage();

When(/^I click on "(.*)" button$/, (button) => {
    shoppingCartPage.clickOnCustomButton(button);
});

When(/^I enter "(.*)" in Name field$/, (name) => {
    shoppingCartPage.enterName(name);
});

When(/^I enter "(.*)" in Country field$/, (country) => {
    shoppingCartPage.enterCountry(country);
});

When(/^I enter "(.*)" in City field$/, (city) => {
    shoppingCartPage.enterCity(city);
});

When(/^I enter "(.*)" in Credit card field$/, (cc_number) => {
    shoppingCartPage.enterCreditCard(cc_number);
});

When(/^I enter "(.*)" in Month field$/, (month) => {
    shoppingCartPage.enterMonth(month);
});

When(/^I enter "(.*)" in Year field$/, (year) => {
    shoppingCartPage.enterYear(year);
});

Then(/^I validate the item in the cart has "(.*)"$/, (value) => {
  shoppingCartPage.getCartItemDetails(value);
});

Then(/^I validate the total price in the Cart is 800$/, () => {
    shoppingCartPage.getTotalCartPrice();
    /* My initial idea was to replace the hardcoded text with variable so I can pass the price value in the step name 
    but for some reason when you do that it shows getTotalCartPrice is undefined - probably Cypress 10+ quirks */
});

Then(/^I validate the total price in the form is 800$/, () => {
    shoppingCartPage.getTotalCartPriceForm();
});