import { Route, Routes } from "react-router-dom";
import { Admin } from "../templates/Admin";
import { UserAppointment } from "../pages/UserAppointment";
import { CreateAppointment } from "../pages/CreateAppointment";
import { LoginTemplate } from "../templates/Login";
import { Protected } from "./Protected";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginTemplate />} />
      <Route path="/login" element={<LoginTemplate />} />
      <Route
        path="/citas"
        element={
          <Protected>
            <Admin content={<UserAppointment />} />
          </Protected>
        }
      />
      <Route
        path="/nuevaCita"
        element={
          <Protected>
            <Admin content={<CreateAppointment />} />
          </Protected>
        }
      />
      <Route
        path="/actualizarCita"
        element={
          <Protected>
            <Admin content={<CreateAppointment />} />
          </Protected>
        }
      />
    </Routes>
  );
};
