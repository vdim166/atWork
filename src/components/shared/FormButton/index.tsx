import styles from "./styles.module.scss";

export const FormButton = ({
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return <button className={styles.btn} {...props}></button>;
};
