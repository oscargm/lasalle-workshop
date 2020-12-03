import { getLanguageFromCookie, getCookie, getAccessToken } from './cookie.service';

describe('cookie.service specs', () => {
  it('getCookie should return cookie value if it exists', async () => {
    document.cookie = 'Custom=value';

    const userLanguage = getCookie('Custom');

    expect(userLanguage).toBe('value');
  });

  it('getCookie should return null if cookie is note defined', async () => {
    document.cookie = 'Custom=value';

    const userLanguage = getCookie('Other');

    expect(userLanguage).toBeNull();
  });

  it('getLanguageFromCookie should return null when the language is not defined', async () => {
    const userLanguage = getLanguageFromCookie();

    expect(userLanguage).toBeNull();
  });

  it('getLanguageFromCookie should return user language when the cookie exists', async () => {
    document.cookie = 'Language=en-US';

    const userLanguage = getLanguageFromCookie();

    expect(userLanguage).toBe('en-US');
  });

  it('getAccessToken should return access token if session cookie exists', async () => {
    const expectedSessionToken = '0123456789';
    const cookieValue = `asasasasasas${expectedSessionToken}asasasasas`;
    document.cookie = `CSPSESSIONID-WEBUI=${cookieValue}`;

    const sessionToken = getAccessToken();

    expect(sessionToken).toBe(expectedSessionToken);
  });
});
