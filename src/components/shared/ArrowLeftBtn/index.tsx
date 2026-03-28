import { Link } from "react-router";
import { ArrowLeft } from "../../svgs/ArrowLeft";
import styles from "./styles.module.scss";

type ArrowLeftBtnProps = {
  to: string;
};

export const ArrowLeftBtn = ({ to }: ArrowLeftBtnProps) => {
  return (
    <Link to={to} className={styles.arrowLeftContainer}>
      <ArrowLeft /> <p className={styles.backText}>Назад</p>
    </Link>
  );
};
