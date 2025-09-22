import {test,expect} from "@playwright/test";

test('Test1', async ({page})=>{
    await page.goto('https://demoblaze.com/')
    await expect(page).toHaveTitle('STORE')

})

test('Test2', async ({page})=>{
    await page.goto('https://www.opennote.com/')
    await page.waitForTimeout(5000)
    await expect(page).toHaveTitle('Opennot')
})