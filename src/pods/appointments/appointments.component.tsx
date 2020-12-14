import { Typography } from '@material-ui/core';
import * as React from 'react';
import { getAppointments } from './api/appointments.service';
import { useStyles } from './appointments.styles';
import { Appointment, Columns } from './model';
import { DataGrid } from '@material-ui/data-grid';
import { useAuth } from 'src/common/authorization/auth.hook';

export const Appointments = () => {
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);
  const { token } = useAuth();
  const classes = useStyles();

  React.useEffect(() => {
    getAppointments(1, token).then((response: Appointment[]) => {
      console.log('response', response);
      setAppointments(response);
    });
  }, []);

  return (
    <div className={classes.container}>
      <Typography variant={'h3'} className={classes.pageTitle}>
        Appointments
      </Typography>
      {appointments && appointments.length > 0 ? (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={appointments}
            columns={Columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      ) : null}
    </div>
  );
};
