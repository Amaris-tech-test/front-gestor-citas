import { useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutside } from "../../utils/hooks/useClickOutside";

import styles from "./Modal.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({
  children,
  isOpen,
  onClose,
}: Props) => {
  const element =
    (document.getElementById("modal") as HTMLDivElement) ||
    document.createElement("div");
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = () => onClose();

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
  }, [onClose]);

  useOnClickOutside(modalRef, handleClickOutside);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [handleKeyPress, isOpen]);

  return ReactDOM.createPortal(
    <>
      {isOpen && (
        <div className={styles.overlayBackground}>
          <div
            className={`${styles.modalContainer}`}
            ref={modalRef}
          >
            {children}
          </div>
        </div>
      )}
    </>,
    element
  );
};
