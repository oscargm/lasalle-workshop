import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { history, routes } from 'core/routes';
import { SingleView } from 'layouts';
import { LoginScene } from './scenes';

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* TODO: configure protected routes */}
      {/* <Route exact={true} path={routes.home}>
        <SingleView>
          <Redirect to={routes.home} />
        </SingleView>
        </Route> */}
      <Route exact={true} path={routes.login}>
        <LoginScene />
      </Route>
    </Switch>
  </BrowserRouter>
);
