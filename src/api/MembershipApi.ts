import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { routes } from '../config/routes';

export class MembershipApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  getMembershipByCustomer(customerId: string): Promise<APIResponse> {
    return this.request.get(this.url(routes.memberships), { params: { customerId } });
  }

  getCustomer(customerId: string): Promise<APIResponse> {
    return this.request.get(this.url(`${routes.customers}/${customerId}`));
  }
}
