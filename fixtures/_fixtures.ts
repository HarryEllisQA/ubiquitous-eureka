import { test as base } from '@playwright/test';
import { InventoryFixture } from './inventory';
import { LoginFixture, NavBarFixture, SignUpFixture } from './navigation-bar';

type DemoBlazeFixtures = {
    inventory: InventoryFixture,
    navbar: NavBarFixture,
    login: LoginFixture,
    signup: SignUpFixture
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
});

export { expect } from '@playwright/test';