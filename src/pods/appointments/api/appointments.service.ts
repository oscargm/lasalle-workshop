import { PATIENT_URL } from 'src/core/constants';
import { Appointment } from '../model';

export const getAppointments = (
  patientId: number,
  token
): Promise<Appointment[]> =>
  fetch(`${PATIENT_URL}/${patientId}/appointments`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json().then((serialized) => serialized));
