import { AVATAR_URL } from "../../hooks/useUsersQuery";
import { Bell } from "../svgs/Bell";
import { Heart } from "../svgs/Heart";
import styles from "./styles.module.scss";

export const RegisteredMenu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.toolsContainer}>
        <Heart />
        <Bell />
      </div>

      <div className={styles.userContainer}>
        <img className={styles.userImage} src={AVATAR_URL} />
        <p className={styles.userName}>Ivan1234</p>
      </div>
    </div>
  );
};
