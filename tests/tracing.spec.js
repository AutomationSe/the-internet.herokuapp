import { test, expect } from "@playwright/test";

test("Visitpage", async ({ page }) => {
    await page.goto("https://demoblaze.com/");

    // Fixed: Use proper role casing and name option
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('pavanol11');
    await page.locator('#loginpassword').fill('test@123');

    // Use either of these options for the login button:

    // Option 1: Using role (recommended)
    await page.getByRole('button', { name: 'Log in' }).click();
    // await expect(page.locator('#nameofuser')).toContainText('pavanol11');
});