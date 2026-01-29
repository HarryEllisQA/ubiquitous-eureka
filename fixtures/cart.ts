import { expect, Locator, Page } from "@playwright/test";
import { ProductInfo } from "./inventory";

export class CartFixture {

    constructor(public readonly page: Page) {}

    public async checkItemIsInCart(cartItem: ProductInfo): Promise<void> {
        let productNameCell: Locator = this.page.getByRole('cell', { name: cartItem.name});
        let itemRow: Locator = this.page.locator('.success').filter({ has: productNameCell});
        await expect(productNameCell).toBeVisible(); // Expect an item in the cart to have the product name
        await expect(itemRow.getByRole('cell', { name: cartItem.price})).toBeVisible(); // Expect the row containing the product name to have the product price
    }

    public async checkout(name: string, country: string, city: string, creditcard: string, month: string, year: string): Promise<void> {
        await this.page.getByRole('button', { name: 'Place Order' }).click();
        await this.page.getByTestId('name').fill(name);
        await this.page.getByTestId('country').fill(country);
        await this.page.getByTestId('city').fill(city);
        await this.page.getByTestId('card').fill(creditcard);
        await this.page.getByTestId('month').fill(month);
        await this.page.getByTestId('year').fill(year);
        await this.page.getByRole('button', { name: 'Purchase' }).click();
        await expect(this.page.getByRole('heading', { name: 'Thank you for your purchase!'})).toBeVisible();
    }

}