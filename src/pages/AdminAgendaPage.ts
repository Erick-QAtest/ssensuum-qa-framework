import { expect, Page } from '@playwright/test';

export class AdminAgendaPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/admin/agenda');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page.getByTestId('admin-agenda')).toBeVisible();
  }
}
