import { useState, useContext } from "react";
import { Button } from "../../atoms/button";
import { Card } from "../../atoms/card";
import { Modal } from '../../atoms/modal';
import { AppointmentContextType, AppointmentItem } from "../../types/Appointment";
import { CancelAppointment } from '../CancelAppointment/index';
import styles from "./AppointmentCard.module.scss";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { useNavigate } from "react-router-dom";

interface props {
  data: AppointmentItem;
}

export const AppointmentCard = ({ data }: props) => {
 const navigate = useNavigate();
 const [isOpen, setIsOpen]  = useState(false);
 const { setAppointmentSelected, setIsEditing, setiInitialValues,setIdEditAppointment}: AppointmentContextType =useContext(AppointmentContext);

  const cancelAppointmentModal = async(data :AppointmentItem) => {
    await setAppointmentSelected(data);
    setIsOpen(true);
  }

  const updateAppointment = async(id:string) => {
    
    const dateOption = new Date(data.appointmentDate);
    setIdEditAppointment(id);
    await  setiInitialValues({
      dateAppointment: dateOption.toISOString().split('T')[0],
      timeAppointment: dateOption.toISOString().split('T')[1].split(".")[0],
      specialty: data.specialty.id,
      doctor: data.doctor.id,
    })

    setIsEditing(true);
    navigate('/actualizarCita')
  }

  return (
    <>
    <Card>
      <div className={styles.appointmentContainer}>
        <section className={styles.appointmentInfo}>
          <p>Fecha:{data.appointmentDate}</p>
          <p>
            Doctor asignado: {data.doctor.name} {data.doctor.lastname}{" "}
          </p>
        </section>
        <section className={styles.appointmentInfo}>
          <p>Tipo de cita: {data.specialty.specialty}</p>
          <p>
            Paciente: {data.user.name} {data.user.lastname}
          </p>
        </section>
        <div className={styles.appointmentButtonsContainer}>
          <Button type="button" variant="outlined" color="primary" onClick={()=> cancelAppointmentModal(data)}>
            Cancelar
          </Button>

          <Button type="button" variant="contained" color="primary" onClick={()=>updateAppointment(data.id)}>
            Actualizar
          </Button>
        </div>
      </div>
    </Card>

    <Modal
      isOpen={isOpen}
      onClose={()=> setIsOpen(false)}
    >
      <CancelAppointment
        cancelOption={()=> setIsOpen(false)}
      />
    </Modal>
    </>
  );
};
