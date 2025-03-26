import { Page } from '@playwright/test';

export class BasePage {
  url = '/';
  constructor(protected page: Page) {}

  goTo = async (): Promise<void> => {
    await this.page.goto(this.url);
  }

  title = async (): Promise<string> => {
    return await this.page.title();
  }
}
