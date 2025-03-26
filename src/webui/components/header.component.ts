import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  contactLink: Locator;
  pricingLink: Locator;
  featuresLink: Locator;
  signInLink: Locator;

  constructor(private page: Page) {
    this.contactLink = this.page.getByRole('link', { name: 'Contact' });
    this.pricingLink = this.page.getByRole('link', { name: 'Pricing' });
    this.featuresLink = this.page.getByRole('link', { name: 'Features' });
    this.signInLink = this.page.locator('#link_text-2376-30291');
  }
}
