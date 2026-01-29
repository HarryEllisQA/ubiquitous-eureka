import { Locator, Page } from "@playwright/test";

export class ProductInfo {

    public readonly name: string;
    public readonly price: string;

    constructor(productName: string, productPrice: string) {
        this.name = productName;
        this.price = productPrice;
    }

}

export class InventoryFixture {

    constructor(public readonly page: Page) {}

    public async addProductToCart(productName: string): Promise<ProductInfo> {
        let product: Locator = this.page.getByRole('link', { name: `${productName}` });
        let productPrice: string = await this.page.locator('.card-block').filter({ has: product }).getByRole('heading', { name: '$'}).innerText();
        let productInfo: ProductInfo = new ProductInfo(productName, productPrice.slice(1));
        await product.click();
        await this.page.getByRole('link', { name: 'Add to cart'}).click();
        return productInfo;
    }

}