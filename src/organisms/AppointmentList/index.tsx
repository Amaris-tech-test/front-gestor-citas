import { useContext } from "react";

import { AppointmentContextType } from "../../types/Appointment";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { AppointmentCard } from "../../molecules/AppointmentCard";
import styles from './AppointmentList.module.scss';

export const AppointmentList = () => {
  const { listAppointment }: AppointmentContextType =
    useContext(AppointmentContext);

  return (
    <div className={styles.appointmentContainer}>
      {listAppointment.map((appointment) => (
        <AppointmentCard data={appointment} key={appointment.id} />
      ))}
    </div>
  );
};
