import { test as base } from '@playwright/test';
import { InventoryFixture } from './inventory';
import { LoginFixture, NavBarFixture, SignUpFixture } from './navigation-bar';
import { CartFixture } from './cart';

type DemoBlazeFixtures = {
    inventory: InventoryFixture,
    navbar: NavBarFixture,
    login: LoginFixture,
    signup: SignUpFixture,
    cart: CartFixture
};

export const test = base.extend<DemoBlazeFixtures>({
    inventory: async ({ page }, use) => {
        const inventory = new InventoryFixture(page);
        await use(inventory);
    },
    navbar: async ({ page }, use) => {
        const navbar = new NavBarFixture(page);
        await use(navbar);
    },
    login: async ({ page }, use) => {
        const login = new LoginFixture(page);
        await use(login);
    },
    signup: async ({ page }, use) => {
        const signup = new SignUpFixture(page);
        await use(signup);
    },
    cart: async ({ page }, use) => {
        const cart = new CartFixture(page);
        await use(cart);
    },
});

export { expect } from '@playwright/test';