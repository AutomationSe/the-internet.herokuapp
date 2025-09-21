import {test,expect} from "@playwright/test";

test("Video recording", async ({page})=>{
    await page.goto("https://demoblaze.com/");
    await page.getByRole('Link', {name: 'Log in'}).click()
    await page.locator('#loginusername1').fill('pavanol11')
    await page.locator('#loginpassword').fill('test@123')
    await page.getByRole('button', {name: 'Log in'}).click()

})