import { ChangeEvent } from "react";

export interface InputProps {
  type: string;
  nameValue: string;
  placeholder: string;
  className?: string;
  value: string;
  onGetValue: (e: ChangeEvent<HTMLInputElement>) => void;
}
