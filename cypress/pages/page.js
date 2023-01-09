class Page {

    openBrowser() {
        cy.visit("https://www.demoblaze.com");
    }

    openShoppingCart() {
        cy.visit("https://www.demoblaze.com/cart.html");
    }
}
export default Page;