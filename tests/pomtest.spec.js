const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/loginpage");
const { Homepage } = require("../pages/homepage"); // Correct import
const { CartPage } = require("../pages/cartpage");

test('test', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotologinpage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000);

    // Verify login success
    // await expect(page.locator('#nameofuser')).toBeVisible();

    // Home - Use Homepage (correct class name)
    const home = new Homepage(page); // lowercase 'p'
    await home.addProductToCart('Samsung galaxy s6');
    await page.waitForTimeout(3000);
    await home.gotocart();

    // Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const isProductInCart = await cart.checkProductInCart('Samsung galaxy s6');
    expect(isProductInCart).toBe(true);
});