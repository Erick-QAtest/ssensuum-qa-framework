export const env = {
  webBaseUrl: process.env.SSENSUUM_WEB_BASE_URL ?? 'http://localhost:3000',
  apiBaseUrl: process.env.SSENSUUM_API_BASE_URL ?? 'http://localhost:8000',
  adminBaseUrl: process.env.SSENSUUM_ADMIN_BASE_URL ?? 'http://localhost:3000/admin',
  memberPhone: process.env.SSENSUUM_MEMBER_PHONE ?? '',
  memberPassword: process.env.SSENSUUM_MEMBER_PASSWORD ?? '',
  adminEmail: process.env.SSENSUUM_ADMIN_EMAIL ?? '',
  adminPassword: process.env.SSENSUUM_ADMIN_PASSWORD ?? ''
};
