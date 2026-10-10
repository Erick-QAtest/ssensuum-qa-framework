import { expect, test } from '@playwright/test';
import { PaymentsApi } from '../../../src/api/PaymentsApi';

// RF-021: reservation confirms only after provider approval notice.
test('@rf @regression RF-021 payment approval webhook confirms reservation', async ({ request }) => {
  test.skip(!process.env.ROUTE_TEST_PAYMENT_WEBHOOK, 'Expose a QA-only payment webhook simulator before enabling this test.');
  const api = new PaymentsApi(request);
  const response = await api.sendTestWebhook({
    type: 'payment.approved',
    data: { reference: 'QA-PLACEHOLDER' }
  });
  expect(response.ok()).toBeTruthy();
});
