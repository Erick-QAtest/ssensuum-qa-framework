import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { routes } from '../config/routes';

export class AdminApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  getAgenda(date: string): Promise<APIResponse> {
    return this.request.get(this.url(routes.adminAgenda), { params: { date } });
  }

  createBlock(payload: {
    therapistId?: string;
    cabinId?: string;
    startsAt: string;
    endsAt: string;
    reason: string;
  }): Promise<APIResponse> {
    return this.request.post(this.url(routes.adminBlocks), { data: payload });
  }
}
