import styles from "./button.module.scss";

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  title: string;
};
const Button = ({ onClick, disabled, title }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={disabled ? styles.disabledButton : styles.button}
    >
      {title}
    </button>
  );
};

export default Button;
