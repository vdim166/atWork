import { Line } from "../Line";
import { Category } from "../shared/Category";
import styles from "./styles.module.scss";

export const ProfileData = () => {
  return (
    <div className={styles.profileData}>
      <div className={styles.profileContainer}>
        <p className={styles.title}>Данные профиля</p>
        <Line />
      </div>

      <Category label="Рабочее пространство" />
      <Category label="Приватность" />
      <Category label="Безопасность" />
    </div>
  );
};
