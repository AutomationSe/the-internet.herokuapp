const { expect } = require("@playwright/test"); // Use require() instead of import

class LoginPage { // Use PascalCase for class names
    constructor(page) {
        this.page = page;
        this.loginlink = '#login2';
        this.usernameinput = '#loginusername';
        this.passwordinput = '#loginpassword';
        this.loginbutton = '//button[normalize-space()="Log in"]';
    }

    async gotologinpage() {
        await this.page.goto('https://demoblaze.com/');
    }

    async login(username, password) {
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameinput).fill(username);
        await this.page.locator(this.passwordinput).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
}

module.exports = { LoginPage }; // Export with PascalCase