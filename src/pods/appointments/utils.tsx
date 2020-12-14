import { Button, Chip, Typography } from '@material-ui/core';
import * as React from 'react';
import { AppointmentStatus } from './model';

export const renderStatus = (status: string) => {
  switch (status.toLowerCase()) {
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
          <Chip color="primary" label={'Accepted'} />
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
          <Chip color="secondary" label={'Pending'} />
        </div>
      );
    default:
      return (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Chip color="default" label={status} />
        </div>
      );
  }
};
