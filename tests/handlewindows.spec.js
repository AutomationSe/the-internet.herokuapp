import { test, expect, chromium } from "@playwright/test";

test.skip('Handle multiple pages', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = context.pages();
    console.log('No of pages created: ', allpages.length);

    // Navigate first page to OrangeHRM
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    // Navigate second page to a DIFFERENT site to demonstrate multiple pages
    await page2.goto("https://demo.nopcommerce.com/");
    await expect(page2).toHaveTitle("nopCommerce demo store");

    // Verify both pages have different titles
    console.log("Page 1 title:", await page1.title());
    console.log("Page 2 title:", await page2.title());

    // Close browser when done
    await browser.close();
});

test.only('Handle multiple pages/Windows', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(page1).toHaveTitle("OrangeHRM");

    // Wait for new page to be opened
    const pagePromise = context.waitForEvent('page');
    await page1.locator("(//a[normalize-space()='OrangeHRM, Inc'])[1]").click();

    // Get the new page - FIXED THIS LINE
    const newPage = await pagePromise;

    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM");

    // Add some timeouts to see what's happening
    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    // Close browser when done
    await browser.close();
});