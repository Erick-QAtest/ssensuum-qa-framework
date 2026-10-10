import { expect, test } from '@playwright/test';

// RF-020: $300 standard / $600 two-therapist services.
test.describe('Deposit rules', () => {
  test.fixme('@rf @smoke RF-020 charges 300 MXN for one-therapist service', async () => {
    expect(300).toBe(300);
  });

  test.fixme('@rf @regression RF-020 charges 600 MXN for two-therapist service', async () => {
    expect(600).toBe(600);
  });
});
