import { ChangeEvent, FC } from "react";
import { InputProps } from "./propTypes";

const Input: FC<InputProps> = ({
  type,
  nameValue,
  placeholder,
  className,
  value,
  onGetValue,
}) => {
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onGetValue(e);
  };

  return (
    <input
      type={type}
      name={nameValue}
      id={nameValue}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onHandleChange}
    />
  );
};

export default Input;
