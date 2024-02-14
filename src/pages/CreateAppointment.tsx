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
  const [errorMessage, setErrorMessage] = useState("");
  const { setListSpecialities, idEditAppointment , isEditing, setIsEditing,setiInitialValues,setIdEditAppointment} = useContext(AppointmentContext);
  const token: string | null = localStorage.getItem("token");
  const idUser: string | null = localStorage.getItem("id");
  const getListSpecialties = async () => {
    const data = await validateFetch({
      type: "get",
      url: `specialty`,
      data: null,
      accessToken: token,
    });

    if (data.statusCode === 200) {
      setListSpecialities(data.data);
    }
  };

  const onSubmit = async (values: FormValues) => {
    const payload = {
      appointmentDate: `${values.dateAppointment} ${values.timeAppointment}`,
      doctor: values.doctor,
      specialty: values.specialty,
      user: idUser,
    };

    const response = await validateFetch({
      type: isEditing ? "put":"post",
      url: isEditing? `appointment/update/${idEditAppointment}` : "appointment",
      data: payload,
      accessToken: token,
    });

    if (response.statusCode === 200) {
      setIsOpen(true);
    } else {
      setIsOpen(true);
      setErrorMessage(response.message);
    }

    setIsEditing(false);
    setiInitialValues({
      dateAppointment: "",
      timeAppointment: "",
      specialty: "",
      doctor: "",
    });
    setIdEditAppointment('')
  };

  const handleCloseAndRedirect = () => {
    setIsOpen(false);
    navigate("/citas");
  };

  useEffect(() => {
    getListSpecialties();
  }, []);

  return (
    <>
      <CreateAppointmentForm handleSubmit={onSubmit} />;
      <Modal isOpen={isOpen} onClose={handleCloseAndRedirect}>
        {errorMessage ? (
          <div> {errorMessage}</div>
        ) : (
          <ConfirmAppointment handleRedirect={handleCloseAndRedirect} />
        )}
      </Modal>
    </>
  );
};
