import { test } from '@playwright/test';
import { PublicCatalogPage } from '../../../src/pages/PublicCatalogPage';
import { BookingPage } from '../../../src/pages/BookingPage';

// RF-010, RF-011, RF-016
// Enable when seeded UI data and stable test IDs are available.
test('@rf @smoke visitor starts a booking with service preloaded and sees summary', async ({ page }) => {
  const serviceName = process.env.QA_SERVICE_NAME;
  const therapistName = process.env.QA_THERAPIST_NAME;
  const date = process.env.QA_AVAILABLE_DATE;
  const time = process.env.QA_AVAILABLE_TIME;

  test.skip(!serviceName || !therapistName || !date || !time, 'Set QA_SERVICE_NAME, QA_THERAPIST_NAME, QA_AVAILABLE_DATE and QA_AVAILABLE_TIME.');

  const catalog = new PublicCatalogPage(page);
  const booking = new BookingPage(page);

  await catalog.goto();
  await catalog.startBooking(serviceName!);
  await booking.selectTherapist(therapistName!);
  await booking.selectDate(date!);
  await booking.selectTime(time!);
  await booking.continueToSummary();
  await booking.expectSummaryContains(serviceName!);
  await booking.expectSummaryContains(therapistName!);
});
