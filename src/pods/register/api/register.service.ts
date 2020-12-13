import { REGISTER_URL } from 'src/core/constants';

export const registerUser = (username, password) =>
  fetch(REGISTER_URL, {
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
    if (!response.ok) {
      const error = `${response.status} | ${data}`;
      console.log(error);
      return Promise.reject(error);
    }

    if (data.error) {
      throw new Error(data.error);
    }
    return data;
  });
