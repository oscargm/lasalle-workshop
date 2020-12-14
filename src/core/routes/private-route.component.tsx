import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from 'src/common/authorization/auth.hook';
import { routes } from './routes';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();
  React.useEffect(() => {
    console.log('token | router', token);
    console.log('token | router | condition', !!!token);
  });
  return (
    <Route
      {...rest}
      render={(
        props // TODO: improve
      ) =>
        typeof token !== 'undefined' && token !== null && token !== '' ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
};
