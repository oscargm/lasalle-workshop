import { PATIENT_URL } from 'src/core/constants';
import { Appointment } from '../model';

export const getAppointments = (patientId: number): Promise<Appointment[]> =>
  fetch(`http://localhost:3000/appointments/${patientId}`).then((res) =>
    res.json().then((serialized) => serialized)
  );
