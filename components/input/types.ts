export interface InputProps {
  type: string;
  nameValue: string;
  placeholder: string;
  className?: string;
  value: string;
  onGetValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
