import BasePage from './basePage';

class CheckoutPage extends BasePage {

    constructor() {
        super();
        this.firstNameTextBox = element(By.id('first-name'));
        this.lastNameTextBox = element(By.id('last-name'));
        this.postalCodeTextBox = element(By.id('postal-code'));
        this.continueButton = element(By.id('continue'));
        this.checkoutSatusMsg = element(By.xpath('//*[@class="title"]'));
    }

    /**
    * Click on checkout page's continue button
    */
    async clickContinue() {
        await this.continueButton.click();
    }

    /**
    * Fill out checkout information on checkout page
    * @param {string} firstName
    * @param {string} lastName
    * @param {string} postalCode
    */
    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameTextBox.sendKeys(firstName);
        await this.lastNameTextBox.sendKeys(lastName);
        await this.postalCodeTextBox.sendKeys(postalCode);
    }

    /**
    * Get checkout status message from final checkout page
    * @returns {string}
    */
    async getCheckoutStatusMessage() {
        return await this.checkoutSatusMsg.getText();
    }

    async pageLoaded() {
        return true;
    }
}
export default new CheckoutPage();