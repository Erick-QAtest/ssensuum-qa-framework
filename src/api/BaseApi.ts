import { APIRequestContext, APIResponse } from '@playwright/test';
import { env } from '../config/env';

export class BaseApi {
  constructor(
    protected readonly request: APIRequestContext,
    protected readonly baseUrl: string = env.apiBaseUrl
  ) {}

  protected url(path: string): string {
    return `${this.baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  }

  protected async json<T>(response: APIResponse): Promise<T> {
    if (!response.ok()) {
      const body = await response.text();
      throw new Error(`API ${response.status()} ${response.statusText()}: ${body}`);
    }
    return response.json() as Promise<T>;
  }
}
