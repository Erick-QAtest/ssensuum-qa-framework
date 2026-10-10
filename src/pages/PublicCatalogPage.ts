import { expect, Page } from '@playwright/test';

export class PublicCatalogPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async expectCatalogVisible(): Promise<void> {
    await expect(this.page.getByTestId('catalog')).toBeVisible();
  }

  serviceCard(serviceName: string) {
    return this.page.getByTestId('service-card').filter({ hasText: serviceName });
  }

  async startBooking(serviceName: string): Promise<void> {
    await this.serviceCard(serviceName).getByRole('button', { name: /reservar/i }).click();
  }
}
