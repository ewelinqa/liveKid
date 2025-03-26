import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class UserProfilePage extends BasePage {
  joinAsParentButton: Locator;

  constructor(page: Page) {
    super(page);
    this.joinAsParentButton = this.page.locator(
      '[test_id="signupJoinAsParentButton"]'
    );
  }

  joinAsParentButtonIsVisible = async () => {
    return await this.joinAsParentButton.isVisible();
  }
}
