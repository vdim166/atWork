import { useEffect } from "react";
import { createPortal } from "react-dom";
import { usePopupStore } from "../../stores/popupStore";
import styles from "./styles.module.scss";
import { Cross } from "../svgs/Cross";

export const Popup = () => {
  const { isOpen, content, closePopup } = usePopupStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closePopup]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      closePopup();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  return createPortal(
    <div className={styles.popupOverlay} onClick={handleBackdropClick}>
      <div className={styles.popupContent}>
        <button className={styles.popupClose} onClick={closePopup}>
          <Cross />
        </button>

        <div className={styles.popupBody}>{content}</div>
      </div>
    </div>,
    document.body,
  );
};
