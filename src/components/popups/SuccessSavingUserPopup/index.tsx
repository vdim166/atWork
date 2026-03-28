import { Success } from "../../svgs/Success";
import styles from "./styles.module.scss";

export const SuccessSavingUserPopup = () => {
  return (
    <div className={styles.main}>
      <Success />
      <p className={styles.text}>Изменения сохранены!</p>
    </div>
  );
};
