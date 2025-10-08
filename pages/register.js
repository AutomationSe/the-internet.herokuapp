const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {

    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator("(//a[normalize-space()='Sign up'])[1]");
        this.usernameLabel = page.locator("label[for='sign-username']");
        this.passwordLabel = page.locator("(//label[@for='sign-password'])[1]");
        this.usernameInput = page.locator("(//input[@id='sign-username'])[1]");
        this.passwordInput = page.locator("#sign-password");
        this.signUpButton = page.locator("button[onclick='register()']");
    }

    async goToDemoBlazeHomepage() {
        await this.page.goto('https://demoblaze.com/index.html');
    }
    async clickSignUpLink() {
        await this.signUpLink.click();
    }

    async registerpageuser(username, password) {
        await expect(this.usernameLabel).toBeVisible();
        await expect(this.usernameLabel).toHaveText('Username:');
        await this.usernameInput.fill(username);
        await expect(this.passwordLabel).toBeVisible();
        await expect(this.passwordLabel).toHaveText('Password:');
        await this.passwordInput.fill(password);
        await this.signUpButton.click();
        await this.page.waitForTimeout(1000);
    }

}
