import { expect, Page } from '@playwright/test';

export class BookingPage {
  constructor(private readonly page: Page) {}

  async selectTherapist(name: string): Promise<void> {
    await this.page.getByTestId('therapist-card').filter({ hasText: name }).click();
  }

  async selectNoPreference(): Promise<void> {
    await this.page.getByRole('button', { name: /sin preferencia/i }).click();
  }

  async selectDate(dateIso: string): Promise<void> {
    await this.page.getByTestId(`date-${dateIso}`).click();
  }

  async selectTime(time: string): Promise<void> {
    await this.page.getByTestId(`slot-${time.replace(':', '-')}`).click();
  }

  async continueToSummary(): Promise<void> {
    await this.page.getByRole('button', { name: /continuar|resumen/i }).click();
  }

  async expectSummaryContains(text: string): Promise<void> {
    await expect(this.page.getByTestId('booking-summary')).toContainText(text);
  }

  async expectDeposit(amount: number): Promise<void> {
    await expect(this.page.getByTestId('deposit-amount')).toContainText(String(amount));
  }
}
