import { AxiosStatic } from 'axios';
import { getAccessToken } from 'common/cookie/cookie.service';

const vcSessionCookie = 'CSPSESSIONID-WEBUI';

//Add ApiTonken on axios default configuration https://swagger.io/docs/specification/authentication/api-keys/
export const addApiKeyOnAxios = (axios: AxiosStatic) => {
  const token = getAccessToken();
  if (!!token) {
    axios.defaults.headers.common['X-API-Key'] = `${token}`;
  } else {
    console.error(`Cookie ${vcSessionCookie} not found.`);
  }
};
