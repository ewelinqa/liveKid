import { PageTitles } from '../../src/enums/titles.enums';
import { HeaderComponent } from '../../src/webui/components/header.component';
import { BasePage } from '../../src/webui/pages/base.page';
import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
});

test('Check the Home Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.severity(allure.Severity.BLOCKER);

  await expect(page).toHaveTitle(PageTitles.BASIC_TITLE);
});

test('Check the Features Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.severity(allure.Severity.BLOCKER);

  const headerComponent = new HeaderComponent(page);
  await headerComponent.contactLink.click();

  await expect(page).toHaveTitle(PageTitles.CONTACT_PAGE_TITLE);
});

test('Check the Pricing Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.severity(allure.Severity.BLOCKER);

  const headerComponent = new HeaderComponent(page);
  await headerComponent.featuresLink.click();

  await expect(page).toHaveTitle(PageTitles.FEATURES_PAGE_TITLE);
});

test('Check the Contact Page title', { tag: '@smoke' }, async ({ page }) => {
  await allure.severity(allure.Severity.BLOCKER);

  const headerComponent = new HeaderComponent(page);
  await headerComponent.pricingLink.click();

  await expect(page).toHaveTitle(PageTitles.FEATURES_PAGE_TITLE); //BUG
});
