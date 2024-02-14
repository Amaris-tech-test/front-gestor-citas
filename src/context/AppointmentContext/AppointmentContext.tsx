import { createContext } from "react";
import {
  AppointmentContextType,
  AppointmentItem,
  FormValues,
  Specialty,
} from "../../types/Appointment";

const defaultAppointment: AppointmentItem = {
  id: "",
  appointmentDate: "",
  doctor: { name: "", lastname: "" },
  user: { name: "", lastname: "" },
  specialty: { specialty: "" },
  
};

const defaultInitialValues:FormValues = {
  dateAppointment: "",
  timeAppointment: "",
  specialty: "",
  doctor: "",
}

const defaultSpecalty: Specialty = { id: "", specialty: "" };
const AppointmentContextData: AppointmentContextType = {
  listAppointment: [],
  setListAppointment: () => {},
  appointmentSelected: defaultAppointment,
  setAppointmentSelected: () => {},
  listSpecialties: [defaultSpecalty],
  setListSpecialities: () => {},
  isEditing: false,
  setIsEditing: () => {},
  initialValues:defaultInitialValues,
  setiInitialValues:() => {},
  idEditAppointment: '',
  setIdEditAppointment: () => {}
};
export const AppointmentContext = createContext(AppointmentContextData);
