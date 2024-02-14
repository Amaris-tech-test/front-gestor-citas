import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CreateAppointmentForm } from "../organisms/CreateAppointmentForm";
import { AppointmentContext } from "../context/AppointmentContext/AppointmentContext";
import { validateFetch } from "../utils/hooks/validateFetch";
import { FormValues } from "../types/Appointment";
import { Modal } from "../atoms/modal";
import { ConfirmAppointment } from "../molecules/ConfirmAppointment";

export const CreateAppointment = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { setListSpecialities } = useContext(AppointmentContext);

  const getListSpecialties = async () => {
    const data = await validateFetch("get", "specialty");

    if (data.statusCode === 200) {
      setListSpecialities(data.data);
    }
  };

  const onSubmit = async (values: FormValues) => {
    const payload = {
      appointmentDate: `${values.dateAppointment} ${values.timeAppointment}`,
      status: "agendada",
      doctor: values.doctor,
      specialty: values.specialty,
      user: "94be206d-2e02-49a5-b02b-29325e0037fb",
    };
    const response = await validateFetch("post", "appointment", payload);

    if (response.statusCode === 200) {
      setIsOpen(true);
    }
  };

  const handleCloseAndRedirect = () => {
    setIsOpen(false)
    navigate('/citas')
  }

  useEffect(() => {
    getListSpecialties();
  }, []);

  return (
    <>
      <CreateAppointmentForm handleSubmit={onSubmit} />;
      <Modal isOpen={isOpen} onClose={handleCloseAndRedirect}>
        <ConfirmAppointment handleRedirect={handleCloseAndRedirect}/> 
      </Modal>
    </>
  );
};
