class Homepage {
    constructor(page) {
        this.page = page;
        this.productList = '//div[@id=\'tbodyid\']/div/div/div/h4/a';
        this.addToCartBtn = '(//a[normalize-space()=\'Add to cart\'])[1]';
        this.cartLink = '#cartur';
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for (const product of productList){
            if (productName === await product.textContent()){
                await product.click();
                break;
            }
        }

        await this.page.on('dialog', async dialog =>{
            if (dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCartBtn).click();
    }

    async gotocart(){
        await this.page.locator(this.cartLink).click(); // Fixed: should be cartLink, not addToCartBtn
    }
}

module.exports = { Homepage };

/*
class Homepage {
    constructor(page) {
        this.page = page;
        // Define actual selectors - these are examples, adjust based on the actual website
        this.productList = '//div[@id=\'tbodyid\']/div/div/div/h4/a'; // CSS selector for product links/names
        this.addToCartBtn = '(//a[normalize-space()=\'Add to cart\'])[1]'; // CSS selector for Add to Cart button
        this.cartLink = '#cartur'; // CSS selector for Cart link
    }

    async addProductToCart(productName) {
        // Get all product elements
        const productList = await this.page.$$(this.productList);
        for (const product of productList){
            if (productName === await product.textContent()){
                await product.click();
                break;
            }
        }

        await this.page.on('dialog', async dialog =>{
            if (dialog.message().includes('added')){
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCartBtn).click();
    }

    async gotocart(){
        await this.page.locator(this.addToCartBtn).click();
    }
}

module.exports = {Homepage}*/
