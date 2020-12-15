import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { routes } from 'core/routes';
import { LoginScene } from './scenes';
import { DashboardScene } from './scenes/dashboard.scene';
import { PatientOverviewScene } from './scenes/patient-overview.scene';
import { AppointmentsScene } from './scenes/appointments.scene';
import { RegisterScene } from './scenes/register.scene';
import { PrivateRoute } from './core/routes/private-route.component';
import { DemoScene } from './scenes/demo.scene';

// react-router-dom docs: https://reactrouter.com/web/guides/quick-start

export const AppRouter = () => (
  <HashRouter>
    <Switch>
      <Route exact={true} path={routes.login}>
        <LoginScene />
      </Route>
      <Route exact={true} path={routes.register}>
        <RegisterScene />
      </Route>
      <Route exact={true} path={routes.demo}>
        <DemoScene />
      </Route>
      <PrivateRoute
        exact={true}
        path={routes.dashboard}
        component={DashboardScene}
      />
      <PrivateRoute
        exact={true}
        path={routes.patientOverview}
        component={PatientOverviewScene}
      />
      <PrivateRoute
        exact={true}
        path={routes.appointments}
        component={AppointmentsScene}
      />
    </Switch>
  </HashRouter>
);
