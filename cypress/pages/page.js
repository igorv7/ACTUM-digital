class Page {

    openBrowser() {
        cy.visit(Cypress.config().baseUrl);
    }

    openShoppingCart() {
        cy.visit("https://www.demoblaze.com/cart.html");
    }
}
export default Page;