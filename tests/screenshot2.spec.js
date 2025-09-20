import {expect, test} from "@playwright/test";

test('test', async ({test})=>{
    await page.goto('https://www.saucedemo.com/')
})