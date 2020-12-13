import { generateUrl } from 'common/utils';

export const BASE_URL =
  process.env.BASE_URL ?? Boolean(process.env.NODE_ENV === 'development')
    ? 'http://localhost:3000'
    : generateUrl(
        window.location.protocol,
        window.location.host,
        window.location.port || null
      );

export const DASHBOARD_URL =
  process.env.DASHBOARD_URL ?? `${BASE_URL}/dashboard`;

export const PATIENT_URL = process.env.PATIENT_URL ?? `${BASE_URL}/patients`;
