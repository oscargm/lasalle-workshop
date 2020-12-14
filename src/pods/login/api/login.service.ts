import { LOGIN_URL } from 'src/core/constants';

export const login = (username, password) =>
  fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  }).then(async (response) => {
    const data = await response.json();
    console.log(data, username, password);
    if (!response.ok) {
      const error = `${response.status} | ${data}`;
      console.log(error);
      return Promise.reject(error);
    }

    if (data.error) {
      throw new Error(data.error);
    }
    console.log('data');
    return data;
  });
