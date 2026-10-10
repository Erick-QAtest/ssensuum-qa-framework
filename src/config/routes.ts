export const routes = {
  services: process.env.ROUTE_SERVICES ?? '/services',
  therapists: process.env.ROUTE_THERAPISTS ?? '/therapists',
  availability: process.env.ROUTE_AVAILABILITY ?? '/availability',
  reservations: process.env.ROUTE_RESERVATIONS ?? '/reservations',
  payments: process.env.ROUTE_PAYMENTS ?? '/payments',
  paymentWebhook: process.env.ROUTE_PAYMENT_WEBHOOK ?? '/payments/webhook',
  testPaymentWebhook: process.env.ROUTE_TEST_PAYMENT_WEBHOOK ?? '',
  memberships: process.env.ROUTE_MEMBERSHIPS ?? '/memberships',
  customers: process.env.ROUTE_CUSTOMERS ?? '/customers',
  adminBlocks: process.env.ROUTE_ADMIN_BLOCKS ?? '/admin/blocks',
  adminAgenda: process.env.ROUTE_ADMIN_AGENDA ?? '/admin/agenda'
};
