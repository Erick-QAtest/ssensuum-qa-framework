import { Page } from '@playwright/test';

export class MemberLoginPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/login');
  }

  async login(phone: string, password: string): Promise<void> {
    await this.page.getByLabel(/tel[eé]fono/i).fill(phone);
    await this.page.getByLabel(/contrase[nñ]a/i).fill(password);
    await this.page.getByRole('button', { name: /entrar|iniciar sesi[oó]n/i }).click();
  }
}
