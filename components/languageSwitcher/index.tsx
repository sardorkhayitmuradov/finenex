import React, { useState } from "react";
import Image from "next/image";
import { OptionType } from "./optionType";
import { LanguageSwitcherProps } from "./propTypes";
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  options,
  onChange,
  switchIcon,
  type
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div
      className={`relative cursor-pointer ${type ? "font-NunitoSansBold text-base-bold text-Gunmetal" : "font-NunitoSansRegular text-base-regular text-white"}`}
      onClick={toggleDropdown}
    >
      <div className="flex p-2">
        {selectedOption.label}
        <Image
          src={switchIcon}
          width={24}
          height={24}
          alt="switch moder"
          className={`duration-300 ml-[2px] ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 z-10 w-[90%]">
          {options
            .filter((option) => option !== selectedOption)
            .map((option, index) => (
              <div
                key={index}
                className={`p-2 rounded-5 duration-150 ${type ? "font-NunitoSansBold text-base-bold text-Gunmetal hover:border-Gunmetal border-Gunmetal" : "font-NunitoSansRegular hover:text-Royal-Blue hover:border-white border-white"} border text-center hover:bg-white bg-transparent`}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
