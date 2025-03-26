import { testUser1 } from '../../test-data/user.data';
import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class SignInPage extends BasePage {
  emailInput: Locator;
  passwordInput: Locator;
  signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = this.page.getByRole('textbox', {
      name: 'example@mail.com',
    });
    this.passwordInput = this.page.getByRole('textbox', {
      name: '***********',
    });
    this.signInButton = this.page.getByText('Sign in');
  }

  setEmail = async (email: string) => {
    await this.emailInput.fill(email);
  }

  setPassword = async (password: string) => {
    await this.passwordInput.fill(password);
  }

  clickSignInButton = async () => {
    await this.signInButton.click();
  }

  userSignIn = async () => {
    await this.setEmail(testUser1.userEmail);
    await this.setPassword(testUser1.userPassword);
    await this.clickSignInButton();
  }
}
