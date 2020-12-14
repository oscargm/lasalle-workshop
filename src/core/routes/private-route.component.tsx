import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'common/authorization';
import { routes } from './routes';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        typeof token !== 'undefined' && token !== null && token !== '' ? ( // TODO: improve
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
};
