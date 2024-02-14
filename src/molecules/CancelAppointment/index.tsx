import { useContext, useState } from "react";

import { Button } from "../../atoms/button";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { AppointmentContextType } from "../../types/Appointment";
import styles from "./CancelAppointment.module.scss";
import { validateFetch } from "../../utils/hooks/validateFetch";
import { useAppointment } from "../../hooks/useAppointment";

interface CancelProps {
  cancelOption: () => void;
}

export const CancelAppointment = ({ cancelOption }: CancelProps) => {
  const { appointmentSelected }: AppointmentContextType =useContext(AppointmentContext);
  const idUser= localStorage.getItem("id");
  const token:string | null = localStorage.getItem('token');
  
  const appointment = useAppointment({
     id: idUser,
     token
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const confirmCancelAppointment = async () => {
    setLoading(true);
    const id = appointmentSelected.id;
    const body = {
      status: "cancelada",
    };

    const data = await validateFetch({
      type: "put", 
      url: `appointment/update/${id}`,
      data: body,
      accessToken: token
    });
    if (data.statusCode === 200) {
      await appointment.getDataAppointment();
      setLoading(false);
      setNotification(true);
    }
  };

  return (
    <section className={styles.cancelContainer}>
      {loading ? (
        "...loading...."
      ) : notification ? (
        <p>Cita cancelada con exito</p>
      ) : (
        <>
          <p className={styles.cancelTitle}>Cancelar cita</p>
          <p>
            ¿Estás seguro de querer cancelar la cita de{" "}
            {appointmentSelected.user.name} {appointmentSelected.user.lastname}?
          </p>
          <div className={styles.buttonContainer}>
            <Button
              type="button"
              variant="text"
              color="primary"
              onClick={cancelOption}
            >
              Cancelar
            </Button>

            <Button
              type="button"
              variant="text"
              color="primary"
              onClick={confirmCancelAppointment}
            >
              Confirmar
            </Button>
          </div>
        </>
      )}
    </section>
  );
};
