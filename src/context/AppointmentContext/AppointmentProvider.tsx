import { useState } from "react";
import { AppointmentContext } from "./AppointmentContext";
import { AppointmentItem, Specialty } from "../../types/Appointment";

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

  const [listAppointment, setListAppointment] = useState<AppointmentItem[]>([]);
  const [appointmentSelected, setAppointmentSelected] = useState<
    AppointmentItem | undefined
  >(undefined);
  const [listSpecialties, setListSpecialities] = useState<Specialty[] | []>([]);

  return (
    <AppointmentContext.Provider
      value={{
        listAppointment,
        setListAppointment,
        appointmentSelected: appointmentSelected || defaultAppointment,
        setAppointmentSelected,
        listSpecialties,
        setListSpecialities,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
