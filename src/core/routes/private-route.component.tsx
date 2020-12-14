import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'src/common/authorization/auth.hook';
import { routes } from './routes';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !!token ? <Component {...props} /> : <Redirect to={routes.login} />
      }
    />
  );
};
