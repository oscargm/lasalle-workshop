import { Button, Chip, Typography } from '@material-ui/core';
import * as React from 'react';
import { AppointmentStatus } from './model';

export const renderStatus = (status: string) => {
  switch (status) {
    case AppointmentStatus.Accepted:
      return (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Chip color="primary" />
          <Typography variant={'caption'}>Accepted</Typography>
        </div>
      );
    case AppointmentStatus.Pending:
      return (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Chip color="secondary" />
          <Typography variant={'caption'}>Pending</Typography>
        </div>
      );
    default:
      return <Button variant="contained">{status}</Button>;
  }
};
