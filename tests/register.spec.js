const { test, expect } = require('@playwright/test');

test.describe('Registration Tests', () => {
    test('LC_001-005: Register user with popup form', async ({ page }) => {
        // Navigate to DemoBlaze homepage
        await page.goto('https://demoblaze.com/index.html');

        // Click the register button link
        await page.click("(//a[normalize-space()='Sign up'])[1]");

        // Check visibility of Username Text
        const usernameLabel = page.locator("label[for='sign-username']");
        await expect(usernameLabel).toBeVisible();
        await expect(usernameLabel).toHaveText('Username:');

        // Check visibility of Password Text
        const passwordLabel = page.locator("(//label[@for='sign-password'])[1]");
        await expect(passwordLabel).toBeVisible();
        await expect(passwordLabel).toHaveText('Password:');

        // Enter username input
        const usernameInput = page.locator("(//input[@id='sign-username'])[1]");
        await usernameInput.fill('senel4444');

        // Enter password input
        const passwordInput = page.locator("#sign-password");
        await passwordInput.fill('senel5555');

        // Click signup button
        const signUpButton = page.locator("button[onclick='register()']");
        await signUpButton.click();

        await page.waitForTimeout(1000);

    });
});