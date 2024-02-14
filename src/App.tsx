
import { AppointmentProvider } from "./context/AppointmentContext/AppointmentProvider";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { AppRouter } from "./router";

const App: React.FC = () => {
  return (
    
      <AuthProvider>
        <AppointmentProvider>
          <AppRouter/>
        </AppointmentProvider>
      </AuthProvider>
  );
};

export default App;
