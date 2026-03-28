import { UsersManager } from "../../components/UsersManager";
import styles from "./styles.module.scss";

export const DashboardPage = () => {
  return (
    <div className={`${styles.main}`}>
      <UsersManager />
    </div>
  );
};
