import common from '../util/common';
import BasePage from './basePage';

class InventoryPage extends BasePage {

    constructor() {
        super();
        this.url = "https://www.saucedemo.com/inventory.html";
        this.selectDropDown = element(By.className('product_sort_container'));
    }

    /**
    * Add any item to the cart
    * @param {number} itemIndex
    */
    async addToCart(itemIndex) {
        await element(By.xpath('//div[@class="inventory_item"][' + itemIndex + ']//child::button')).click();
    }

    /**
    * get number of items in the cart, if there are any
    * @returns {string}
    */
    async getCartItemCount() {
        return await element(By.xpath('//span[@class="shopping_cart_badge"]')).getText();
    }

    /**
    * get number of items displayed on inventory page
    * @returns {number}
    */
    async getInventoryItemsCount() {
        return (await element.all(By.xpath('//div[@class="inventory_item"]'))).length;
    }

    /**
    * sort items on inventory page using dropdown's available options
    * @param {string} visibletext
    */
    async sortListWith(visibletext) {
        await common.selectDropdownbyText(this.selectDropDown, visibletext);
    }

    /**
    * get prices of all the items on inventory page
    * @returns {Array}
    */
    async getAllPrices() {
        var prices = new Array();
        let len = (await element.all(by.xpath('//div[@class="inventory_item_price"]'))).length;

        for (let i = 1; i <= len; i++) {
            prices[i - 1] = parseFloat((await (await element(by.xpath('(//div[@class="inventory_item_price"])[' + i + ']'))).getText()).substr(1));
        }
        return prices;
    }

    /**
    * get names of all the items on inventory page
    * @returns {Array}
    */
    async getAllItemNames() {
        var itemNames = new Array();
        let len = (await element.all(by.xpath('//div[@class="inventory_item_name"]'))).length;

        for (let i = 1; i <= len; i++) {
            itemNames[i - 1] = (await (await element(by.xpath('(//div[@class="inventory_item_name"])[' + i + ']'))).getText());
        }
        return itemNames;
    }

    async pageLoaded() {
        return true;
    }
}
export default new InventoryPage();