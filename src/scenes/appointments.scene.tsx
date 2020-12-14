import * as React from 'react';
import { SingleView } from 'src/layouts';
import { Appointments } from 'src/pods/appointments/appointments.component';

export const AppointmentsScene = () => (
  <SingleView>
    <Appointments />
  </SingleView>
);
