import * as React from 'react';
import { BrowserRouter, HashRouter, Redirect, Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';
import { routes } from 'core/routes';
// import { SingleView } from 'layouts';
import { LoginScene } from './scenes';
import { DashboardScene } from './scenes/dashboard.scene';

export const AppRouter = () => (
  <HashRouter>
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
      <Route exact={true} path={routes.dashboard}>
        <DashboardScene />
      </Route>
    </Switch>
  </HashRouter>
);
