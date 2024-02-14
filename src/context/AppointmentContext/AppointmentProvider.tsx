import { useState } from "react";
import { AppointmentContext } from "./AppointmentContext";
import {
  AppointmentItem,
  FormValues,
  Specialty,
} from "../../types/Appointment";

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const defaultAppointment: AppointmentItem = {
    id: "",
    appointmentDate: "",
    doctor: { name: "", lastname: "" },
    user: { name: "", lastname: "" },
    specialty: { specialty: "" },
  };

  const defaultInitialValues: FormValues = {
    dateAppointment: "",
    timeAppointment: "",
    specialty: "",
    doctor: "",
  };

  const [listAppointment, setListAppointment] = useState<AppointmentItem[]>([]);
  const [appointmentSelected, setAppointmentSelected] = useState<
    AppointmentItem | undefined
  >(undefined);
  const [listSpecialties, setListSpecialities] = useState<Specialty[] | []>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [initialValues, setiInitialValues] = useState(defaultInitialValues);
  const [idEditAppointment, setIdEditAppointment] = useState('');

  return (
    <AppointmentContext.Provider
      value={{
        listAppointment,
        setListAppointment,
        appointmentSelected: appointmentSelected || defaultAppointment,
        setAppointmentSelected,
        listSpecialties,
        setListSpecialities,
        isEditing,
        setIsEditing,
        initialValues: initialValues || defaultInitialValues,
        setiInitialValues,
        idEditAppointment, setIdEditAppointment
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
