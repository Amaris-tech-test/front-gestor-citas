import { useEffect } from "react";

import { AppointmentList } from "../organisms/AppointmentList";
import { useAppointment } from "../hooks/useAppointment";
import { useAuth } from "../hooks/useAuth";

export const UserAppointment = () => {
  const { user } = useAuth();
  const token:string | null = localStorage.getItem('token');
  const appointment = useAppointment({
    id: user?.id,
    token
  });

  useEffect(() => {
    appointment.getDataAppointment();
  }, []);

  return <div>{appointment.isLoading ? "cargando" : <AppointmentList />}</div>;
};
