import styles from "./Card.module.scss";

interface CardProps {
  children: JSX.Element | JSX.Element[] | string;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.cardContainer}>{children}</div>;
};
