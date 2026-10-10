import { expect, test } from '@playwright/test';
import { BookingApi } from '../../../src/api/BookingApi';

// RF-017: 6h before can reschedule; 4h before warns/loses deposit.
test.describe('RF-017 rescheduling rules', () => {
  test.fixme('@rf @regression allows reschedule with 6 hours remaining', async ({ request }) => {
    const api = new BookingApi(request);
    expect(api).toBeTruthy();
  });

  test.fixme('@rf @regression warns or records deposit loss with 4 hours remaining', async ({ request }) => {
    const api = new BookingApi(request);
    expect(api).toBeTruthy();
  });
});
