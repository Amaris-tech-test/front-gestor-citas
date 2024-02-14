
import styles from './ErrorMessage.module.scss';

interface ErrorProps {
  error: string | undefined;
  errorResponsive?: string;
  errorMessResp?: string;
}

export const ErrorMessage = ({ error, ...props }: ErrorProps) => {
  return (
    <>
      {error && (
        <div className={`${props.errorResponsive && styles[props.errorResponsive]}`}>
          <span
            className={`${styles.errorMessage} ${
              props.errorMessResp && styles[props.errorMessResp]
            }`}
          >
            {error}
          </span>
        </div>
      )}
    </>
  );
};
