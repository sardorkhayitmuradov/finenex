import { OptionType } from "./optionType";

export interface LanguageSwitcherProps {
  options: OptionType[];
  onChange: (option: OptionType) => void;
}
