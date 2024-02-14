import styles from "./Button.module.scss";

interface ButtonProps {
  type: "button" | "submit";
  variant: "contained" | "outlined" | "text";
  color: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  children: JSX.Element | JSX.Element[] | string;
  // [key: string]: any;
}

export const Button = ({
  type,
  variant,
  color,
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      className={`${styles[variant]} ${styles[color]} ${styles.baseButton} 
        ${disabled && styles.disabled}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
