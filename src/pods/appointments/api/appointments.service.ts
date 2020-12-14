import { APPOINTMENTS_URL } from 'src/core/constants';
import { Appointment } from '../model';

export const getAppointments = (
  patientId: number,
  token
): Promise<Appointment[]> =>
  fetch(`${APPOINTMENTS_URL}?patientId=${patientId}`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json().then((serialized) => serialized));
