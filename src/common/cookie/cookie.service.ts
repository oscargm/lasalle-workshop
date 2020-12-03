const vcSessionCookie = 'CSPSESSIONID-WEBUI';

export const getCookie = (name: string): string => {
  const nameLenPlus = name.length + 1;
  return (
    document.cookie
      .split(';')
      .map((c) => c.trim())
      .filter((cookie) => cookie.substring(0, nameLenPlus) === `${name}=`)
      .map((cookie) => decodeURIComponent(cookie.substring(nameLenPlus)))[0] || null
  );
};

export const getLanguageFromCookie = () => getCookie('Language');

export const getAccessToken = () => {
  const sessionCookie = getCookie(vcSessionCookie);
  const initialPosition = 12;
  const tokenLength = 10;
  return sessionCookie ? sessionCookie.substring(initialPosition, initialPosition + tokenLength) : null;
};
