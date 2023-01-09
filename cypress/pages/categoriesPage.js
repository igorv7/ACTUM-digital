import Page from './page';
class CategoriesPage extends Page {

    // Element locators
    CATEGORY_TAB = '[id="itemc"]';
    CATEGORY_ITEM = '[class="hrefch"]';
    ITEM_PRICE = '[class="price-container"]';
    ITEM_NAME = '[class="name"]';
    ADD_TO_CART_BUTTON = 'a[class="btn btn-success btn-lg"]';

     // Functions
    clickPhonesTab() {
        cy.get(this.CATEGORY_TAB).contains('Phones').click();
    }

    clickLaptopsTab() {
        cy.get(this.CATEGORY_TAB).contains('Laptops').click();
    }

    clickMonitorsTab() {
        cy.get(this.CATEGORY_TAB).contains('Monitors').click();
    }

    clickSamsungS7Item() {
        cy.get(this.CATEGORY_ITEM).contains('Samsung galaxy s7').click();
    }

    clickMacbookProItem() {
        cy.get(this.CATEGORY_ITEM).contains('MacBook Pro').click();
    }

    clickAppleMonitorItem() {
        cy.get(this.CATEGORY_ITEM).contains('Apple monitor 24').click();
    }

    clickAddToCartButton() {
        cy.get(this.ADD_TO_CART_BUTTON).contains('Add to cart').click();
    }

    getItemName(name) {
        cy.get(this.ITEM_NAME).contains(name);
    }

    getItemPrice(price) {
        cy.get(this.ITEM_PRICE).contains(price);
    }

    getAddToCartButton() {
        cy.get(this.ADD_TO_CART_BUTTON).contains('Add to cart').should('be.visible');
    }

}
export default CategoriesPage;