import { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { routes } from '../config/routes';

export type AvailabilityQuery = {
  serviceId: string;
  date: string;
  therapistId?: string;
};

export type CreateReservationPayload = {
  customerId?: string;
  serviceId: string;
  therapistIds: string[];
  startsAt: string;
  cabinId?: string;
  source?: string;
};

export class BookingApi extends BaseApi {
  constructor(request: APIRequestContext) {
    super(request);
  }

  getServices(): Promise<APIResponse> {
    return this.request.get(this.url(routes.services));
  }

  getTherapists(): Promise<APIResponse> {
    return this.request.get(this.url(routes.therapists));
  }

  getAvailability(query: AvailabilityQuery): Promise<APIResponse> {
    const params: Record<string, string> = {
      serviceId: query.serviceId,
      date: query.date
    };
    if (query.therapistId) params.therapistId = query.therapistId;
    return this.request.get(this.url(routes.availability), { params });
  }

  createReservation(payload: CreateReservationPayload): Promise<APIResponse> {
    return this.request.post(this.url(routes.reservations), { data: payload });
  }

  getReservation(reservationId: string): Promise<APIResponse> {
    return this.request.get(this.url(`${routes.reservations}/${reservationId}`));
  }

  reschedule(reservationId: string, startsAt: string): Promise<APIResponse> {
    return this.request.patch(this.url(`${routes.reservations}/${reservationId}/reschedule`), {
      data: { startsAt }
    });
  }
}
