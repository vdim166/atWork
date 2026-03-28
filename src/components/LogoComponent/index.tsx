import { Logo } from "../svgs/Logo";
import styles from "./styles.module.scss";

export const LogoComponent = () => {
  return (
    <div className={`${styles.main}`}>
      <Logo />
      <div className={styles.wordContainer}>
        <p className={`${styles.at}`}>at-</p>
        <p className={`${styles.work}`}>work</p>
      </div>
    </div>
  );
};
