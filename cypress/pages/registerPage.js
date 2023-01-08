import Page from './page';
class RegisterPage extends Page {
    // Element locators
    SIGN_UP_TAB = '[id="signin2"]';
    SIGN_UP_BUTTON = '[type="button"]';
    SIGN_UP_USERNAME_FIELD = '[id="sign-username"]';
    SIGN_UP_PASSWORD_FIELD = '[id="sign-password"]';

    // Functions
    clickSignUpTab() {
        cy.get(this.SIGN_UP_TAB).click();
    }

    clickSignUpButton() {
        cy.get(this.SIGN_UP_BUTTON).contains('Sign up').click();
    }

    enterSignUpUsername(email) {
        cy.get(this.SIGN_UP_USERNAME_FIELD).clear();
        cy.get(this.SIGN_UP_USERNAME_FIELD).type(email);
    }

    enterSignUpPassword(password) {
        cy.get(this.SIGN_UP_PASSWORD_FIELD).clear();
        cy.get(this.SIGN_UP_PASSWORD_FIELD).type(password);
    }
}
export default RegisterPage;