import { expect, Locator, Page } from "@playwright/test";

export class NavBarFixture {

    public readonly loginButton: Locator;
    public readonly signUpButton: Locator;
    public readonly nameOfUser: Locator;
    public readonly cartButton: Locator;

    constructor(public readonly page: Page) {
        this.loginButton = page.getByTestId('login2');
        this.signUpButton = page.getByTestId('signin2');
        this.nameOfUser = page.getByTestId('nameofuser');
        this.cartButton = page.getByTestId('cartur');
    }
    
}

export class LoginFixture {

    public readonly usernameField: Locator;
    public readonly passwordField: Locator;
    public readonly logInButton: Locator;
    public readonly closeButton: Locator;

    constructor(public readonly page: Page) {
        this.usernameField = page.getByTestId('loginusername');
        this.passwordField = page.getByTestId('loginpassword');
        this.logInButton = page.getByRole('button', { name: 'Log in' });
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }

    public async loginAsUser(navbar: NavBarFixture, username: string, password: string): Promise<void> {
        await navbar.loginButton.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.logInButton.click();

        await expect(navbar.nameOfUser).toHaveText(`Welcome ${username}`);
    }

}

export class SignUpFixture {

    public readonly usernameField: Locator;
    public readonly passwordField: Locator;
    public readonly signUpButton: Locator;
    public readonly closeButton: Locator;

    constructor(public readonly page: Page) {
        this.usernameField = page.getByTestId('sign-username');
        this.passwordField = page.getByTestId('sign-password');
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.closeButton = page.getByRole('button', { name: 'Close' });
    }

    /** Returns the number of milliseconds since 01/01/1970 (UTC) as a string. */
    public generateUniqueString(): string { return Date.now().toString(); }

    public  async signUpAsUser(navbar: NavBarFixture, username: string, password: string): Promise<void> {
        await navbar.signUpButton.click();
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.signUpButton.click();
    }

}