import { Locator, Page } from "@playwright/test";

export class NavBarFixture {

    public readonly loginButton: Locator;
    public readonly signUpButton: Locator;
    public readonly nameOfUser: Locator;

    constructor(public readonly page: Page) {
        this.loginButton = page.getByTestId('login2');
        this.signUpButton = page.getByTestId('signin2');
        this.nameOfUser = page.getByTestId('nameofuser');
    }
    
}

export class LoginFixture {

    public readonly usernameField: Locator;
    public readonly passwordField: Locator;
    public readonly LogInButton: Locator;
    public readonly CloseButton: Locator;

    constructor(public readonly page: Page) {
        this.usernameField = page.getByTestId('loginusername');
        this.passwordField = page.getByTestId('loginpassword');
        this.LogInButton = page.getByRole('button', { name: 'Log in' });
        this.CloseButton = page.getByText('Close');
    }

}

export class SignUpFixture {

    constructor(public readonly page: Page) {
        
    }

}