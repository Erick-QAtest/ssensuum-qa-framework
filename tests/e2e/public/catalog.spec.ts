import { test } from '@playwright/test';
import { PublicCatalogPage } from '../../../src/pages/PublicCatalogPage';

// RF-001
// Frontend contract: add data-testid="catalog" and data-testid="service-card".
test('@rf @smoke RF-001 visitor can see the public catalog', async ({ page }) => {
  const catalog = new PublicCatalogPage(page);
  await catalog.goto();
  await catalog.expectCatalogVisible();
});
