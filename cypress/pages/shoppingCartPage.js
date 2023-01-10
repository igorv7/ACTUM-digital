import Page from './page';
class ShoppingCartPage extends Page {

    // Element locators
    CART_ITEM = '[id="tbodyid"]';
    TOTAL_PRICE = '[id="totalp"]';
    TOTAL_PRICE_FORM = '[id="totalm"]';
    CUSTOM_BUTTON = '[type="button"]';
    NAME_FIELD = '[id="name"]';
    COUNTRY_FIELD = '[id="country"]';
    CITY_FIELD = '[id="city"]';
    CREDIT_CARD_FIELD = '[id="card"]';
    MONTH_FIELD = '[id="month"]';
    YEAR_FIELD = '[id="year"]';
    DELETE_ITEM = '[class="success"]';


    // Functions
    getCartItemDetails(value) {
        cy.get(this.CART_ITEM).contains(value).should('be.visible');
    }

    getTotalCartPrice() {
        cy.get(this.TOTAL_PRICE).should('have.text', 800);
    }

    getTotalCartPriceForm() {
        cy.get(this.TOTAL_PRICE_FORM).should('have.text', 'Total: 800');
    }

    enterName(name) {
        cy.get(this.NAME_FIELD).clear();
        cy.get(this.NAME_FIELD).type(name);
    }

    enterCountry(country) {
        cy.get(this.COUNTRY_FIELD).clear();
        cy.get(this.COUNTRY_FIELD).type(country);
    }

    enterCity(city) {
        cy.get(this.CITY_FIELD).clear();
        cy.get(this.CITY_FIELD).type(city);
    }

    enterCreditCard(cc_number) {
        cy.get(this.CREDIT_CARD_FIELD).clear();
        cy.get(this.CREDIT_CARD_FIELD).type(cc_number);
    }

    enterMonth(month) {
        cy.get(this.MONTH_FIELD).clear();
        cy.get(this.MONTH_FIELD).type(month);
    }

    enterYear(year) {
        cy.get(this.YEAR_FIELD).clear();
        cy.get(this.YEAR_FIELD).type(year);
    }

    clickOnCustomButton(button) {
        cy.get(this.CUSTOM_BUTTON).contains(button).click();
    }

    clickDeleteItem() {
        cy.get(this.DELETE_ITEM).contains('Delete').click();
    }

}
export default ShoppingCartPage;