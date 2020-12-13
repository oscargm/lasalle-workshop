import { APPOINTMENTS_URL } from 'src/core/constants';
import { Appointment } from '../model';

export const getAppointments = (patientId: number): Promise<Appointment[]> =>
  fetch(`${APPOINTMENTS_URL}/${patientId}`).then((res) =>
    res.json().then((serialized) => serialized)
  );
