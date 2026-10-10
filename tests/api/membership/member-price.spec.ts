import { expect, test } from '@playwright/test';

// RF-032: member pricing only while membership is active.
test.describe('Member pricing', () => {
  test.fixme('@rf @regression RF-032 active membership applies member price', async () => {
    expect(true).toBeTruthy();
  });

  test.fixme('@rf @regression RF-032 expired membership returns to public price', async () => {
    expect(true).toBeTruthy();
  });
});
