import { OptionType } from "./optionType";

export interface LanguageSwitcherProps {
  options: OptionType[];
  switchIcon: string;
  type: boolean;
  onChange: (option: OptionType) => void;
}
