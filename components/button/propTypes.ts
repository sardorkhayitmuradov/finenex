import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClicked?: MouseEventHandler<HTMLButtonElement>;
}
