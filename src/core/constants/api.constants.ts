import { generateUrl } from 'common/utils';

export const BASE_URL =
  process.env.BASE_URL ?? Boolean(process.env.NODE_ENV === 'development')
    ? 'http://localhost:3000'
    : generateUrl(window.location.protocol, window.location.host, window.location.port || null);

export const INSTRUMENTS_URL = process.env.INSTRUMENTS_URL ?? `${BASE_URL}/instruments`;
export const CONFIGURATION_URL = process.env.CONFIGURATION_URL ?? `${BASE_URL}/configuration`;
export const DEMOGRAPHICS_URL = process.env.DEMOGRAPHICS_URL ?? `${BASE_URL}/demographics`;
