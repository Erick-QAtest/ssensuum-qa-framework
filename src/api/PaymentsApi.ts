import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { routes } from '../config/routes';

export class PaymentsApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  getPayment(paymentId: string): Promise<APIResponse> {
    return this.request.get(this.url(`${routes.payments}/${paymentId}`));
  }

  /**
   * Intended only for QA/STG. The real payment provider should own card data.
   * Configure ROUTE_TEST_PAYMENT_WEBHOOK only if the backend offers a safe test hook.
   */
  sendTestWebhook(payload: unknown): Promise<APIResponse> {
    if (!routes.testPaymentWebhook) {
      throw new Error('ROUTE_TEST_PAYMENT_WEBHOOK is not configured.');
    }
    return this.request.post(this.url(routes.testPaymentWebhook), { data: payload });
  }
}
