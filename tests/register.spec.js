const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pages/register');

test.describe('Registration Tests', () => {

    test('LC_001-005: Register user with popup form', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.goToDemoBlazeHomepage();
        await registerPage.clickSignUpLink();
        await registerPage.registerpageuser('senel4444', 'senel5555');

    });

});