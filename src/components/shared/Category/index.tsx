import { useState } from "react";
import styles from "./styles.module.scss";

type CategoryProps = {
  label: string;
};

export const Category = ({ label }: CategoryProps) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={`${styles.category} ${active ? styles.active : ""}`}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <p className={styles.textOption}>{label}</p>
    </div>
  );
};
