import BasePage from './basePage';

class CartPage extends BasePage {

    constructor() {
        super();
        this.url = 'https://www.saucedemo.com/cart.html';
    }

    async pageLoaded() {
        return true;
     }
}
export default new CartPage();