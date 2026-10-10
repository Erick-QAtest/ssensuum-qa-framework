import { expect, test } from '@playwright/test';
import { BookingApi } from '../../../src/api/BookingApi';

// RF-055: no double booking for a therapist or cabin.
test('@rf @regression RF-055 prevents concurrent double booking', async ({ request }) => {
  const serviceId = process.env.QA_SERVICE_ID;
  const therapistId = process.env.QA_THERAPIST_ID;
  const startsAt = process.env.QA_FREE_STARTS_AT;

  test.skip(!serviceId || !therapistId || !startsAt, 'Seed one free QA slot and set QA_SERVICE_ID, QA_THERAPIST_ID and QA_FREE_STARTS_AT.');

  const api = new BookingApi(request);
  const payload = {
    serviceId: serviceId!,
    therapistIds: [therapistId!],
    startsAt: startsAt!,
    source: 'qa-automation'
  };

  const [a, b] = await Promise.all([
    api.createReservation(payload),
    api.createReservation(payload)
  ]);

  const statuses = [a.status(), b.status()].sort();
  expect(statuses.filter((s) => s >= 200 && s < 300)).toHaveLength(1);
  expect(statuses.some((s) => [409, 422].includes(s))).toBeTruthy();
});
