import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useAuth } from "../../hooks/useAuth";
import { Input } from "../../atoms/input";
import { Button } from "../../atoms/button";
import { validateFetch } from "../../utils/hooks/validateFetch";
import styles from './Login.module.scss';

export const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Correo invalido")
          .required("Campo requerido"),
        password: Yup.string().required("Campo requerido"),
      })}
      onSubmit={async (values) => {
        const data = await validateFetch("post", `user/login`, values);
        if(data.statusCode === 200) {
          const token = data.data.token;
          const user = {
            email: data.data.email,
            id: data.data.id,
          }
          login(token, user) 
        }
      }}
    >
      {() => (
        <Form className={styles.formContainer}>
          <Input name="email" type="text" label="Correo electrónico" />
          <Input name="password" type="password" label="Contraseña" />

          <Button type="submit" variant="contained" color="primary">
            Iniciar sesión
          </Button>
        </Form>
      )}
    </Formik>
  );
};
