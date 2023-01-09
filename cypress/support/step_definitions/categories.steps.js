const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import CategoriesPage from "../../pages/categoriesPage";

const categoriesPage = new CategoriesPage();

When(/^I click on category Phones$/, () => {
  categoriesPage.clickPhonesTab();
});

When(/^I open Samsung Galaxy S7 item$/, () => {
    categoriesPage.clickSamsungS7Item();
});

When(/^I click on category Laptops$/, () => {
    categoriesPage.clickLaptopsTab();
});

When(/^I open Macbook Pro item$/, () => {
    categoriesPage.clickMacbookProItem();
});

When(/^I click on category Monitors$/, () => {
    categoriesPage.clickMonitorsTab();
});

When(/^I open Apple Monitor item$/, () => {
    categoriesPage.clickAppleMonitorItem();
});

When(/^I click on Add to Cart button$/, () => {
    categoriesPage.clickAddToCartButton();
});

Then(/^I validate that item name is "(.*)"$/, (name) => {
    categoriesPage.getItemName(name);
});

Then(/^I validate that item price is "(.*)"$/, (price) => {
    categoriesPage.getItemPrice(price);
});

Then(/^I validate that Add to cart button is visible$/, () => {
    categoriesPage.getAddToCartButton();
});