import { expect, test } from '@playwright/test';

// RF-012
// 4 hands / couples must require two distinct therapists unless no-preference business logic handles assignment.
test.fixme('@rf @regression RF-012 two-therapist service cannot continue with only one selected', async ({ page }) => {
  expect(page).toBeTruthy();
});
