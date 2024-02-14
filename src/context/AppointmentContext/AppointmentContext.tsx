import { createContext } from "react";
import {
  AppointmentContextType,
  AppointmentItem,
  Specialty,
} from "../../types/Appointment";

const defaultAppointment: AppointmentItem = {
  id: "",
  appointmentDate: "",
  doctor: { name: "", lastname: "" },
  user: { name: "", lastname: "" },
  specialty: { specialty: "" },
};

const defaultSpecalty: Specialty = { id: "", specialty: "" };
const AppointmentContextData: AppointmentContextType = {
  listAppointment: [],
  setListAppointment: () => {},
  appointmentSelected: defaultAppointment,
  setAppointmentSelected: () => {},
  listSpecialties: [defaultSpecalty],
  setListSpecialities: () => {},
};
export const AppointmentContext = createContext(AppointmentContextData);
