import BasePage from './basePage';

class SwaglabsLoginPage extends BasePage {

    constructor() {
        super();
        this.url = browser.params.loginData.url;
        this.userName = element(By.id('user-name'));
        this.password = element(By.id('password'));
        this.loginButton = element(By.id('login-button'));
    }

    /**
    * login user by entering username, password and clicks on login button
    */
    async loginUser() {
        await this.userName.sendKeys(browser.params.loginData.login.login_set_1.username);
        await this.password.sendKeys(browser.params.loginData.login.login_set_1.password);
        await this.loginButton.click();
    }

    /**
    * verify user has logged in by checking inventory page url
    */
    async verifyUserLoggedIn() {
        if ((await browser.getCurrentUrl()).includes('inventory')) {
            return true;
        }
        else { return false; }
    }

    async pageLoaded() {        
        return true;
}

}
export default new SwaglabsLoginPage();