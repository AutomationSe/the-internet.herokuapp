import {test,expect} from "@playwright/test";
const path = require('path');
const fs = require('fs');

/*const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
}

function getScreenshotPath(name) {
    return path.join(screenshotsDir, `${name}_${Date.now()}.png`);
}*/
const screenshotsDir = path.join(__dirname, 'screenshots');

test('page screenshot', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Wait for the page to load completely
    await page.waitForLoadState('networkidle');

    // Add path separator between directory and filename
    await page.screenshot({path: screenshotsDir + '/' + Date.now() + 'HomePage.png'})
});

test('page Full screenshot', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('networkidle');

    // Add path separator between directory and filename
    await page.screenshot({path: screenshotsDir + '/' + Date.now() + 'Fullpage.png', fullPage: true})
});

test.only('Element screenshot', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('networkidle');
    await page.locator('(//h4[normalize-space()=\'Accepted usernames are:\'])[1]').screenshot({path: screenshotsDir + '/' + Date.now() + 'Macbook.png'})
})