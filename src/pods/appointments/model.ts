import { ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { renderStatus } from './utils';

export interface Appointment {
  id: number;
  name: string;
  speciality: string; // enum of specialities
  appointmentDate: string;
  appointmentTime: string;
  followUpDate: string;
  followUpTime: string;
  status: string; // enum of states
}

export const Columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Doctor Name', width: 130 },
  { field: 'speciality', headerName: 'Speciality', width: 130 },
  { field: 'appointmentDate', headerName: 'Appointment Date', width: 130 },
  { field: 'appointmentTime', headerName: 'Appointment Time', width: 130 },
  { field: 'followUpDate', headerName: 'Follow up Date', width: 130 },
  { field: 'followUpTime', headerName: 'Follow up Time', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params: ValueGetterParams) =>
      renderStatus(params.getValue('status').toString()),
  },
];

export enum AppointmentStatus {
  Accepted = 'Accepted',
  Pending = 'Pending',
}
