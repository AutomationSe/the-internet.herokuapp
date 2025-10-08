const { expect } = require('@playwright/test');

exports.contact = class contact {
    constructor(page){
        this.page = page;

        this.contactlink = page.locator('')
        this.newmessagetext = page.locator('')
        this.contactEmail = page.locator('')
        this.contactName = page.locator('')
        this.contactMessage = page.locator('')
        this.contactemailInput = page.locator('')
        this.contactnameInput = page.locator('')
        this.contactmessageInput = page.locator('')
    }

    async visitwebpage(){
        await this.page.goto('https://demoblaze.com/index.html')
    }

    async Newmessage(email,name,message){
        await this.contactlink.click();
        
    }
}