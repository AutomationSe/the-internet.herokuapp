const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {

    await page.goto('https://demoblaze.com/index.html');
        
    // Click on Log in button to open login popup
    await page.click("//a[normalize-space()='Log in']");
    
    // Wait for login popup to appear
    await page.waitForSelector('#loginusername', { state: 'visible' });
    
    // Fill login form
    const loginUsername = page.locator("#loginusername");
    await loginUsername.fill('senel4444');
    
    const loginPassword = page.locator("#loginpassword");
    await loginPassword.fill('senel5555');
    
    // Click Log in button
    const loginButton = page.locator("button[onclick='logIn()']");
    await loginButton.click();
    
    // Wait for login to complete
    await page.waitForTimeout(2000);
    
    // Verify login success (check if "Welcome" text appears or user is logged in)
    await expect(page.locator("//a[normalize-space()='Log out']")).toBeVisible();

});
