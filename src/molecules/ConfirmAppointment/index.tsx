import { Button } from "../../atoms/button";

interface ConfirmProps {
  handleRedirect: () => void;
}

export const ConfirmAppointment: React.FC<ConfirmProps> = ({
  handleRedirect,
}) => {
  return (
    <section>
      <h5>Cita creada con éxito.</h5>
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={handleRedirect}
      >
        Aceptar
      </Button>
    </section>
  );
};
