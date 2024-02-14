import { HTMLProps } from "react";
import { useField } from "formik";

import { ErrorMessage } from "../ErrorMessage";
import styles from "./Select.module.scss";

interface SelectProps extends Omit<HTMLProps<HTMLSelectElement>, "name"> {
  label: string;
  name: string;
}
export const Select = ({ label, ...props }: SelectProps) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name} className={`${styles.label} `}>
        {label}
      </label>
      <select
        data-testid="select-input-form"
        {...field}
        {...props}
        className={styles.selectContainer}
        disabled={props.disabled}
      />
      <ErrorMessage error={meta.error} />
    </div>
  );
};
