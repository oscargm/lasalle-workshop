import { ColDef, ValueGetterParams } from '@material-ui/data-grid';
import { renderStatus } from './utils';

export interface Appointment {
  id: number;
  description: string;
  subject: string;
  location: string;
  status: string; // enum of states
}

export const Columns: ColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Description', width: 130 },
  { field: 'subject', headerName: 'Subject', width: 130 },
  { field: 'location', headerName: 'Location', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 130,
    renderCell: (params: ValueGetterParams) =>
      renderStatus(params.getValue('status').toString()),
  },
];

export enum AppointmentStatus {
  Accepted = 'accepted',
  Pending = 'pending',
}
