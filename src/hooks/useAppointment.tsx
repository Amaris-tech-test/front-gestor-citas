import { useState, useContext } from "react";
import { AppointmentContextType } from "../types/Appointment";
import { validateFetch } from "../utils/hooks/validateFetch";
import { AppointmentContext } from "../context/AppointmentContext/AppointmentContext";

interface Appointment {
  id: string | undefined;
  token:string | null;
}

export const useAppointment = ({id, token}: Appointment) => {
  const [isLoading, setIsLoading] = useState(true);
  const { setListAppointment }: AppointmentContextType =
    useContext(AppointmentContext);

  const getDataAppointment = async () => {
    const data = await validateFetch({
      type: "get", 
      url: `appointment/${id}`,
      data: null,
      accessToken: token
    });
    setListAppointment(data.data);
    setIsLoading(false);
  };


  return { isLoading, getDataAppointment};
};
