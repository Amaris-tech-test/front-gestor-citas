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
  const appointment = useAppointment({
     id: "94be206d-2e02-49a5-b02b-29325e0037fb",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);

  const confirmCancelAppointment = async () => {
    setLoading(true);
    const id = appointmentSelected.id;
    const body = {
      status: "cancelada",
    };

    const data = await validateFetch("put", `appointment/update/${id}`, body);
    if (data.statusCode === 200) {
      await appointment.getDataAppointment();
      setLoading(false);
      setNotification(true);
    }

    console.log(data);
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
