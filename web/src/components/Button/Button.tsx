import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button data-testid="button" className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
