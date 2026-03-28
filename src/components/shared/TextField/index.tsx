import { Cross } from "../../svgs/Cross";
import styles from "./styles.module.scss";

type TextFieldProps = {
  inputTitle?: string;
  initValue?: string;

  handleReset: () => void;
  error?: string;
};

// По макету не очень понятно нужно ли чтобы текст в TextField всегда был одного цвета при вводе или нет,
// поэтому если я неправильно понял задачу, то при необходимости могу доделать

export const TextField = ({
  inputTitle,
  initValue = "",
  handleReset,
  error,
  ...inputProps
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  TextFieldProps) => {
  return (
    <div className={styles.main}>
      {inputTitle && <p className={styles.inputTitle}>{inputTitle}</p>}
      <div className={styles.inputContainer}>
        <input
          className={`${styles.input} ${initValue !== inputProps.value ? styles.isChanged : ""} ${error ? styles.error : ""}`}
          {...inputProps}
        />
        {initValue !== inputProps.value && (
          <div className={styles.crossContainer} onClick={handleReset}>
            <Cross />
          </div>
        )}
      </div>
    </div>
  );
};
