import * as React from 'react';
import { AuthContext } from './auth.context';

export const useAuth = (token: string = '') => {
  const [state, setState] = React.useContext(AuthContext);

  const setToken = (newToken: string) => {
    localStorage.setItem('sessionToken', newToken);
    setState({ ...state, token: newToken });
  };
  const removeToken = () => {
    localStorage.setItem('sessionToken', null);
    setState({ ...state, token: null });
  };

  return { token: state.token, setToken, removeToken };
};
