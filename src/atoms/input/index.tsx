import { useField, FieldHookConfig } from "formik";

import styles from "./Input.module.scss";
import { ErrorMessage } from "../ErrorMessage";

type InputFieldProps = FieldHookConfig<string> & {
  label?: string;
  type?: string;
  placeholder?: string;
  style?: string;
  name?: string;
  min?: string;
  max?: string;
};

export const Input = ({ label, ...props }: InputFieldProps) => {
  const [field, meta] = useField(props);
  return (
    <div className={`${styles.inputConainer} `}>
      {label ? (
        <label
          htmlFor={props.name}
          className={`${styles.inputLabel}`}
        >
          {label}
        </label>
      ) : null}
      <div className={styles.input}>
        <input
          data-testid={`input-field-${props.name}`}
          type={props.type || "text"}
          className={`${styles.inputs}`}
          placeholder={props.placeholder && props.placeholder}
          min={props.min}
          max={props.max}
          {...field}
          
        />

      </div>

      {meta.touched && <ErrorMessage error={meta.error} />}
    </div>
  );
 
};
