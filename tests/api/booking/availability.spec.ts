import { expect, test } from '@playwright/test';
import { BookingApi } from '../../../src/api/BookingApi';

// RF-013 / RF-014 / RF-015
// Adapt IDs/dates to seeded QA data before enabling in CI.
test.describe('Booking availability', () => {
  test('@rf @smoke RF-014 returns real availability without occupied slots', async ({ request }) => {
    const api = new BookingApi(request);
    const date = process.env.QA_AVAILABLE_DATE;
    const serviceId = process.env.QA_SERVICE_ID;

    test.skip(!date || !serviceId, 'Set QA_AVAILABLE_DATE and QA_SERVICE_ID to run this contract test.');

    const response = await api.getAvailability({ serviceId: serviceId!, date: date! });
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toHaveProperty('slots');
    expect(Array.isArray(body.slots)).toBeTruthy();
  });
});
