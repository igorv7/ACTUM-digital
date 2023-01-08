import Page from './page';
class LoginPage extends Page {
    
    // Element locators
    LOG_IN_TAB = '[id="login2"]';
    LOGIN_USERNAME_FIELD = '[id="loginusername"]';
    LOGIN_PASSWORD_FIELD = '[id="loginpassword"]';
    LOG_IN_BUTTON = '[type="button"]';
    LOGGED_USER_LABEL = '[id="nameofuser"]'

    // Functions
    clickLoginTab() {
        cy.get(this.LOG_IN_TAB).click();
    }

    enterLoginUsername(email) {
        cy.get(this.LOGIN_USERNAME_FIELD).clear();
        cy.get(this.LOGIN_USERNAME_FIELD).type(email);
    }

    enterLoginPassword(password) {
        cy.get(this.LOGIN_PASSWORD_FIELD).clear();
        cy.get(this.LOGIN_PASSWORD_FIELD).type(password);
    }

    clickLoginButton() {
        cy.get(this.LOG_IN_BUTTON).contains('Log in').click();
    }

    getLoggedUser() {
        cy.get(this.LOGGED_USER_LABEL).contains('Welcome blazeyourself@mail.com');
    }


}
export default LoginPage;