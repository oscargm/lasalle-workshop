import * as React from 'react';
import { AuthContext } from './auth.context';

export const useAuth = (token: string = '') => {
  const [state, setState] = React.useContext(AuthContext);

  const setToken = (newToken: string) => {
    setState({ ...state, token: newToken });
  };

  return { token: state.token, setToken };
};
