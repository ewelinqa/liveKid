import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';
import { UserProfilePage } from './userProfile.page';

export class PrivacyPolicyAcceptPage extends BasePage {
  acceptButton: Locator;

  constructor(page: Page) {
    super(page);
    this.acceptButton = this.page.locator('[test_id="accept"]');
  }

  acceptPrivacyPolicy = async () => {
    await this.acceptButton.click();
    return new UserProfilePage(this.page);
  };
}
