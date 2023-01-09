const { Given } = require("@badeball/cypress-cucumber-preprocessor");
import Page from "../../pages/page";

const page = new Page();

Given(/^I visit demoblaze webpage$/, () => {
    page.openBrowser();
});

Given(/^I go to Shopping Cart page$/, () => {
    page.openShoppingCart();
});