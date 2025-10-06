import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Login Test', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotologinpage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(page.locator('h2')).toHaveText('Secure Area');
    await expect(page.locator('h4')).toHaveText('Welcome to the Secure Area. When you are done click logout below.');

});