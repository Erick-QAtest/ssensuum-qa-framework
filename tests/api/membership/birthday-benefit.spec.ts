import { expect, test } from '@playwright/test';

// RF-044 / RF-045
// One birthday massage per year, no deposit; no-show loses that year's redemption.
test.describe('Birthday benefit', () => {
  test.fixme('@rf @regression RF-044 birthday massage books without deposit once per year', async () => {
    expect(true).toBeTruthy();
  });

  test.fixme('@rf @regression RF-045 no-show marks birthday benefit as lost', async () => {
    expect(true).toBeTruthy();
  });
});
