import { useEffect } from "react";

import { AppointmentList } from "../organisms/AppointmentList";
import { useAppointment } from "../hooks/useAppointment";

export const UserAppointment = () => {
  
  const token:string | null = localStorage.getItem('token');
  const idUser:string | null = localStorage.getItem("id");
  const appointment = useAppointment({
    id: idUser,
    token
  });

  useEffect(() => {
    appointment.getDataAppointment();
  }, []);

  return <>{appointment.isLoading ? "cargando" : <AppointmentList />}</>;
};
