
import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <p className={styles.title}>Gestor de citas</p>
      <section className={styles.linksOptions}>
      {/* <nav> */}
        {/* <ul>
          <li>
            <Link to="/">Mis citas</Link>
          </li>
          <li>
            <Link to="/nuevaCita">Nueva cita</Link>
          </li>
        </ul>
      </nav> */}
      </section>
    </div>
  )
}
