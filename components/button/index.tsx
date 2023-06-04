import { FC, MouseEvent } from "react";
import { ButtonProps } from "./propTypes";

const Button: FC<ButtonProps> = ({ className, children, onClicked }) => {
  const onSubmitted = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClicked) {
      onClicked(e);
    }
  };
  return (
    <button className={className} onClick={(e) => onSubmitted(e)}>
      {children}
    </button>
  );
};

export default Button;
