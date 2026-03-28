import styles from "./styles.module.scss";

type DropdownProps = {
  children: React.ReactNode;
};

export const Dropdown = ({ children }: DropdownProps) => {
  return <div className={styles.dropdown}>{children}</div>;
};
