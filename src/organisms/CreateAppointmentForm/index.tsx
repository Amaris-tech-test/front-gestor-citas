import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Input } from "../../atoms/input";
import { Select } from "../../atoms/Select";
import { validateFetch } from "../../utils/hooks/validateFetch";
import { SpecialtyItem } from "../../types/Specialty";
import { DoctorItem } from "../../types/Doctor";
import { Button } from "../../atoms/button";
import styles from "./CreateAppointmentForm.module.scss";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { AppointmentForm } from "../../types/Appointment";

export const CreateAppointmentForm: React.FC<AppointmentForm> = ({handleSubmit}) => {
  const token: string | null = localStorage.getItem("token");
  const navigate = useNavigate();
  const { listSpecialties, isEditing, initialValues } = useContext(AppointmentContext);
  const [listDoctors, setListDoctors] = useState([]);
  const today = new Date().toISOString().split("T")[0];
  const generateOptions = () => {
    const options = [];
    let hour = 6;
    let minute = 0;

    while (hour < 18) {
      options.push(
        `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`
      );
      minute += 30;
      if (minute >= 60) {
        hour++;
        minute = 0;
      }
    }

    return options;
  };

  const getDoctorsBySpecialty = async (specialtyId: string) => {
    const data = await validateFetch({
      type: "get",
      url: `doctor/doctorBySpecialty/${specialtyId}`,
      data: null,
      accessToken: token,
    }
      
    );
    if (data.statusCode === 200) {
      setListDoctors(data.data);
    }
  };


  useEffect(() => {
    initialValues.specialty && getDoctorsBySpecialty(initialValues.specialty)
  },[])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        dateAppointment: Yup.string().required(
          "Olvidaste diligenciar este campo"
        ),
        timeAppointment: Yup.string().required(
          "Olvidaste diligenciar este campo"
        ),
        specialty: Yup.string().required("Olvidaste diligenciar este campo"),
        doctor: Yup.string().required("Olvidaste diligenciar este campo"),
      })}
      onSubmit={(values) => { handleSubmit(values)
      }}
    >
      {({ setFieldValue }) => (
        <Form className={styles.formContainer}>
          <h3 className={styles.titleAppointmentForm}> {isEditing ? 'Actualizar cita' : 'Crear cita'}</h3>
          <section className={styles.optionsFormContainer}>
            <Input
              type="date"
              name="dateAppointment"
              min={today}
              label="Fecha"
            />
            <Select label="Hora" name="timeAppointment">
              <option value="" disabled>
                Seleccione
              </option>
              {generateOptions().map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </Select>
            <Select
              label="Especialidad"
              name="specialty"
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const specialtyId = event.target.value;
                setFieldValue("specialty", specialtyId);
                if (specialtyId) {
                  getDoctorsBySpecialty(specialtyId);
                } else {
                  setListDoctors([]);
                }
              }}
            >
              <option value="" disabled>
                Seleccione
              </option>
              {listSpecialties.map((specialty: SpecialtyItem) => (
                <option value={specialty.id} key={specialty.id}>
                  {specialty.specialty}
                </option>
              ))}
            </Select>

            <Select label="Doctor" name="doctor">
              <option value="" disabled selected>
                Seleccione
              </option>
              {listDoctors.map((doctor: DoctorItem) => (
                <option value={doctor.id} key={doctor.id}>
                  {doctor.name} {doctor.lastname}
                </option>
              ))}
            </Select>
          </section>

          <section className={styles.buttonsContainer}>
            <Button
              variant="outlined"
              color="primary"
              type="button"
              onClick={() => navigate("/citas")}
            >
              Cancelar
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Guardar
            </Button>
          </section>
        </Form>
      )}
    </Formik>
  );
};
