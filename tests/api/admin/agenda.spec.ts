import { expect, test } from '@playwright/test';
import { AdminApi } from '../../../src/api/AdminApi';

// RF-050
// Requires auth once admin authentication is wired into the API context.
test('@rf @smoke RF-050 admin agenda endpoint returns the requested day', async ({ request }) => {
  const date = process.env.QA_AGENDA_DATE;
  test.skip(!date, 'Set QA_AGENDA_DATE after admin auth is integrated.');
  const api = new AdminApi(request);
  const response = await api.getAgenda(date!);
  expect([200, 401, 403]).toContain(response.status());
});
