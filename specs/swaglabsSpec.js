import swaglabsLoginPage from "../pages/swagLabsLoginPage.js";
import inventoryPage from "../pages/inventoryPage.js";
import cartPage from "../pages/cartPage.js";
import checkoutPage from "../pages/checkoutPage.js";
import common from "../util/common.js";

describe('Swag Labs tests', () => {

    beforeAll(async () => {
        (global).isAngularSite(false);
        await swaglabsLoginPage.goto();
    });

    it('should log in with standard user', async () => {
        await swaglabsLoginPage.loginUser();
        expect(await swaglabsLoginPage.verifyUserLoggedIn()).toEqual(true);
    });

    it('should add an item to the cart', async () => {
        await inventoryPage.addToCart(2);
        expect(await inventoryPage.getCartItemCount()).toEqual('1');
    });

    it('should have 6 items on the inventory page', async () => {
        expect(await inventoryPage.getInventoryItemsCount()).toEqual(6);
    });

    it('should complete the purchase process of an item from the inventory', async () => {
        let checkoutData = browser.params.testData.checkoutInfo;
        await cartPage.goto();
        await cartPage.clickButtonWithText('Checkout');
        await checkoutPage.fillCheckoutInformation(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode);
        await checkoutPage.clickContinue();
        await cartPage.clickButtonWithText('Finish');
        expect(await checkoutPage.getCheckoutStatusMessage()).toEqual('CHECKOUT: COMPLETE!');
    });

    // BONUS tests! Not required for the automation challenge, but do these if you can.
    it('sort the inventory items by price, high-to-low', async () => {
        await inventoryPage.goto();
        await inventoryPage.sortListWith('Price (high to low)');
        var prices = await inventoryPage.getAllPrices();
        var sortedPrices = await (await common.sortData(await inventoryPage.getAllPrices(), 'desc'))
        await expect(prices).toEqual(sortedPrices);
    });

    it('sort the inventory items by name, Z-to-A', async () => {
        await inventoryPage.sortListWith('Name (Z to A)');
        expect(inventoryPage.getAllItemNames())
            .toEqual((common.sortData(inventoryPage.getAllItemNames(), 'desc')));
    });

})
