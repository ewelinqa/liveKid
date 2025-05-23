import { PageTitles } from '../../../src/enums/titles.enums';
import { testUser1 } from '../../../src/test-data/user.data';
import { HeaderComponent } from '../../../src/webui/components/header.component';
import { BasePage } from '../../../src/webui/pages/base.page';
import { SignInPage } from '../../../src/webui/pages/signIn.page';
import { UserProfilePage } from '../../../src/webui/pages/userProfile.page';
import { expect, test } from '@playwright/test';
import * as allure from 'allure-js-commons';

test.beforeEach(async ({ page }) => {
  const basePage = new BasePage(page);
  await basePage.goTo();
});

test('Sign in', { tag: '@signIn' }, async ({ page }) => {
  await allure.feature('User Authentication');
  await allure.story('Sign In process');
  await allure.severity(allure.Severity.BLOCKER);
  await allure.description('This test verifies the sign-in process and checks if the user lands on the profile page.');

  const headerComponent = new HeaderComponent(page);

  const [pageSignIn] = await Promise.all([
    page.waitForEvent('popup'),
    headerComponent.signInLink.click(),
  ]);

  const signInPage = new SignInPage(pageSignIn);
  await signInPage.userSignIn();

  const userProfilePage = new UserProfilePage(pageSignIn);

  expect(await userProfilePage.title()).toBe(PageTitles.BASIC_TITLE);
  expect(userProfilePage.joinAsParentButtonIsVisible).toBeTruthy();

  const screenshot = await pageSignIn.screenshot({ path: 'screenshots/signin.png', fullPage: true });
  allure.attachment('SignIn Screenshot', screenshot, 'image/png');
});
