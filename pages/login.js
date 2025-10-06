exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
		this.usernameInput = page.locator("(//input[@id='username'])[1]");
		this.passwordInput = page.locator("(//input[@id='password'])[1]");
		this.loginButton = page.locator("(//i[@class='fa fa-2x fa-sign-in'])[1]")

    }

    async gotologinpage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');

    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

    }

}