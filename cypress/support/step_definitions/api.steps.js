const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Functions
Given(/^All Demoblaze routes are intercepted$/, () => {
    cy.intercept('POST','https://api.demoblaze.com/addtocart').as('addItemToCart');
});

When(/^I capture Add Item To Cart response$/, () => {
    cy.wait('@addItemToCart')
        .its('response')
        .then((response) => {
            cy.wrap(response).as('addedItemToCartResponse');
        });
})

Then(/^I assert that Add to Cart API response has been successful$/, () => {
    console.log(this.addedItemToCartResponse.statusCode).to.be.equal(200);
})