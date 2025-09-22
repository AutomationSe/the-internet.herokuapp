const {test,expect}= require("@playwright/test");
const {LoginPage} = require("../pages/loginpage")

test('test', async ({page})=> {
    const login = new LoginPage(page);
    await login.gotologinpage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(3000)

    //Home
    const home = new Homepage(page)
    await home.addProductToCart('Samsung galaxy s6')
    await page.waitForTimeout(3000);
    await home.gotocart();

    //Cart
    const cartpage = new cartpage(page)
    await page.waitForTimeout(3000)
    const statusvar = await cartpage.checkproductincart('Samsung galaxy s6')
    expect(await statusvar).toBe(true);


})