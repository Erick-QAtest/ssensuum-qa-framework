import { expect, test } from '@playwright/test';
import { MemberLoginPage } from '../../../src/pages/MemberLoginPage';
import { env } from '../../../src/config/env';

// RF-030
// Adapt the post-login assertion to the real member portal.
test('@rf @regression RF-030 member can log in with phone and password', async ({ page }) => {
  test.skip(!env.memberPhone || !env.memberPassword, 'Set SSENSUUM_MEMBER_PHONE and SSENSUUM_MEMBER_PASSWORD.');
  const login = new MemberLoginPage(page);
  await login.goto();
  await login.login(env.memberPhone, env.memberPassword);
  await expect(page).not.toHaveURL(/login/i);
});
