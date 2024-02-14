import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { Button } from "../../atoms/button";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div className={styles.navbar}>
      <p className={styles.title}>Gestor de citas</p>
      <section className={styles.linksOptions}>
        <nav className={styles.linksContainer}>
          <Link to="/citas">Visualizar citas</Link>

          <Link to="/nuevaCita">Crear cita</Link>
        </nav>
      </section>

      <section className={styles.logout}>
      <Button type="button" variant="text" color="secondary" onClick={()=> logout()}>
        Cerrar Sesión
      </Button>
      </section>
    </div>
  );
};
